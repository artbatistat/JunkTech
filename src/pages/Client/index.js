import { useContext } from "react";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import './map.css'
import { AuthEmailContext } from "../../contexts/authEmail";

export const Client = () => {

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

