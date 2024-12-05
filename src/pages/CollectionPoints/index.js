import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import './map.css';

async function getPickUpPoints() {
    try {
        const response = await fetch('https://junktech.vercel.app/pickup-point', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return [];
    }
}

async function getAddressFromGeolocation(lat, lng) {
    const googleApiKey = 'AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar endereço: ' + response.status);
        }
        const data = await response.json();
        if (data.status === 'OK' && data.results.length > 0) {
            return data.results[0].formatted_address; // Endereço formatado
        } else {
            return 'Endereço não encontrado';
        }
    } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        return 'Erro ao buscar endereço';
    }
}

async function transformPickUpPoints() {
    const pickUpPoints = await getPickUpPoints();

    const transformedPoints = await Promise.all(
        pickUpPoints.map(async (point, index) => {
            const [lat, lng] = point.geolocation.split(', ').map(Number);
            const address = await getAddressFromGeolocation(lat, lng);
            return {
                id: index + 1,
                name: `Point ${index + 1}`, // Nome genérico, substitua conforme necessário
                position: { lat, lng },
                address, // Endereço obtido pela API
            };
        })
    );

    return transformedPoints;
}

export const CollectionPoints = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
    });

    const [transformedPoints, setTransformedPoints] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const points = await transformPickUpPoints();
            setTransformedPoints(points);
        };
        fetchData();
    }, []);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        transformedPoints.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    if (!isLoaded) return <div>Carregando mapa...</div>;
    if (!transformedPoints.length) return <div>Carregando pontos de coleta...</div>;

    return (
        <>
            <PageNavegation />
            <h1 className="title">Veja os pontos de coleta na sua região!</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="map">
                        <div style={{ width: "50vw", height: "50vh" }}>
                            <GoogleMap
                                onLoad={handleOnLoad}
                                onClick={() => setActiveMarker(null)}
                                mapContainerStyle={{ width: "100%", height: "100%" }}
                            >
                                {transformedPoints.map(({ id, name, position }) => (
                                    <Marker
                                        key={id}
                                        position={position}
                                        onClick={() => handleActiveMarker(id)}
                                    >
                                        {activeMarker === id ? (
                                            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                                <div>{name}</div>
                                            </InfoWindow>
                                        ) : null}
                                    </Marker>
                                ))}
                            </GoogleMap>
                        </div>
                    </div>
                </div>
                <div className="collection-points">
                    <h2>Detalhes dos Pontos de Coleta</h2>
                    <div className="points-flex">
                        {transformedPoints.map(({ id, name, address }) => (
                            <div key={id} className="collection-point">
                                <h3>{name}</h3> <br />
                                <p><strong>Endereço: </strong> <br /> {address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    );
};