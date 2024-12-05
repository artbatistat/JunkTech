import React, { useState, useContext } from "react";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from "@react-google-maps/api";
import { AuthEmailContext } from "../../contexts/authEmail";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import "./map.css";

export const Enterprise = () => {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [searchBox, setSearchBox] = useState(null);
    const [location, setLocation] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const { user } = useContext(AuthEmailContext);

    if (!user) return null;
    const position = { lat: -19.912998, lng: -43.940933 };

    const onMapLoad = (map) => setMap(map);

    const onSearchBoxLoad = (ref) => setSearchBox(ref);

    const onPlacesChanged = () => {
        if (!searchBox) return;

        const places = searchBox.getPlaces();
        const place = places?.[0];
        if (!place) return;

        const loc = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };

        setLocation(loc);
        map.panTo(loc);
        setMarkers([loc]);
    };

    const sendLocation = async () => {
        if (!location) {
            alert("Por favor, selecione um local.");
            return;
        }

        const token = sessionStorage.getItem("@AuthFirebase:token");
        if (!token) {
            console.error("Token não encontrado!");
            return;
        }

        const data = JSON.stringify({
            geolocation: `${location.lat}, ${location.lng}`,
            owner_id: user.sub,
        });

        const response = await fetch('http://junktech.vercel.app/pickup-point', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`,
            },
            body: data,
        });

        if (response.ok) {
            setSuccessMessage("Localização salva com sucesso!");
            setTimeout(() => setSuccessMessage(""), 3000);
        } else {
            console.error("Erro na requisição:", response.status, response.statusText);
        }
    };



    return (
        <>
            <PageNavegation />

            <div className="map-container">
                <div className="controls">
                    <LoadScript
                        googleMapsApiKey="AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
                        libraries={['places']}
                    >
                        <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
                            <input className="address" placeholder="Digite um endereço" type="text" />
                        </StandaloneSearchBox>
                        <button onClick={sendLocation} className="send-button">Enviar</button>
                    </LoadScript>
                </div>

                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="map">
                    <LoadScript
                        googleMapsApiKey="AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
                        libraries={['places']}
                    >
                        <GoogleMap
                            onLoad={onMapLoad}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={position}
                            zoom={10}
                        >
                            {markers.map((marker, index) => (
                                <Marker key={index} position={marker} />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>

            <PageFooter />
        </>
    );
};
