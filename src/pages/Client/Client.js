import { useContext } from "react";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import './map.css'
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { faMapSigns, faShareAltSquare } from "@fortawesome/free-solid-svg-icons";

export const Client = () => {
    const {user} =  useContext(AuthGoogleContext);
    const jsonString = JSON.stringify(user);
    const userLogged = JSON.parse(jsonString)

    console.log(userLogged)

    return(
        <>
        <PageNavegation></PageNavegation>
        <br/><h1>Client page</h1>
        <div class="container-fluid">
            <div class="row">
            </div>
        </div>

        <PageFooter></PageFooter>
        </>
    )
}

