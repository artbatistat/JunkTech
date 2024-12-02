import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import './map.css';

const markers = [
    {
        id: 1,
        name: "Emile",
        position: { lat: -19.993362, lng: -44.181484 },
        address: "Endereço 1",
        phone: "31 9 3276-2947"
    },
    {
        id: 2,
        name: "Br Ambiental",
        position: { lat: -19.962945, lng: -44.138216 },
        address: "Endereço 2",
        phone: "31 9 3276-2947"
    },
    {
        id: 3,
        name: "Bh Recicla",
        position: { lat: -19.957054, lng: -44.034900 },
        address: "Endereço 3",
        phone: "31 9 3276-2947"
    },
    {
        id: 4,
        name: "MG Recicla",
        position: { lat: -19.940838, lng: -44.001605 },
        address: "Endereço 4",
        phone: "31 9 3276-2947"
    },
    {
        id: 5,
        name: "Coletar Reciclagem",
        position: { lat: -19.929466, lng: -44.054793},
        address: "Endereço 4",
        phone: "31 9 3276-2947"
    }
];

export const CollectionPoints = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
    });

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    if (!isLoaded) return <div>Carregando...</div>;

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
                                {markers.map(({ id, name, position }) => (
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
                        {markers.map(({ id, name, address, phone }) => (
                            <div key={id} className="collection-point">
                                <h3>{name}</h3> <br />
                                <p><strong>Endereço: </strong> <br /> {address}</p>
                                <p><strong>Telefone:</strong><br /> {phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    );
};