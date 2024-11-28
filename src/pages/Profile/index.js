import { useContext } from "react";
import Autocomplete from "react-google-autocomplete";
import { AuthEmailContext } from "../../contexts/authEmail";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";

<Autocomplete
    apiKey="AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
    onPlaceSelected={(place) => {
        console.log(place);
    }}
/>;

export const Profile = () => {
    const { user } = useContext(AuthEmailContext)

    console.log(user)

    if (!user) {
        return '';
    }

    return (
        <>
            <PageNavegation></PageNavegation>

            <br /><h1>Profile Page</h1>
            <h3>Bem-vindo {user.username}</h3>

            <Autocomplete
                style={{ width: "500px" }}
                apiKey={"AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc"}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
                componentRestrictions={{ country: "br" }}
                
                fields={["address_components", "geometry", "name", "place_id", "formatted_address"]}
                strictBounds={true}
            
            />


            <PageFooter></PageFooter>
        </>
    )
}