import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import React, { useContext } from "react";
import { AuthEmailContext } from "../../contexts/authEmail";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import './map.css';


export const Enterprise = () => {

    async function setPosition(position) {
        const stringPosition = `${position.lat}, ${position.lng}`;

        const token = sessionStorage.getItem("@AuthFirebase:token");
        if (!token) {
            console.error("Token não encontrado!");
            return;
        }

        const data = JSON.stringify({
            geolocation: stringPosition,
            owner_id: user.sub
        });

        const response = await fetch('http://cors-anywhere.herokuapp.com/http://junktech.vercel.app/pickup-point', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
            body: data
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Requisição bem-sucedida:", result);
        } else {
            console.error("Erro na requisição:", response.status, response.statusText);
        }
    }

    const position = { lat: -19.957054, lng: -44.034900 }
    const [map, setMap] = React.useState(undefined);
    const [markers, setMarkers] = React.useState([])

    const onMapLoad = (map) => {
        setMap(map);
    };

    const [searchBox, setSeatchBox] = React.useState(null);

    const onLoad = (ref) => {
        setSeatchBox(ref)
    }

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        const place = places[0];
        const location = {
            lat: place?.geometry?.location?.lat() || 0,
            lng: place?.geometry?.location?.lng() || 0
        }

        setPosition(location)

        map.panTo(location)
        setMarkers([...markers, location])
    }

    const { user } = useContext(AuthEmailContext)

    if (!user) {
        return '';
    }

    return (
        <>
            <PageNavegation></PageNavegation>

            < br /> <h1>Profile Page </h1>
            < div className="map" >
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey="AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
                    libraries={['places']}
                >

                    <GoogleMap
                        onLoad={onMapLoad}
                        mapContainerStyle={{ width: '100%', height: '100%' }
                        }
                        center={position}
                        zoom={15}
                    >

                        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                            <input className="address" placeholder="Digite um endereço" type="text" />

                        </StandaloneSearchBox>

                        {markers.map((marker, index) => (
                            <Marker key={index} position={marker} />
                        ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <PageFooter></PageFooter>
        </>
    )
}