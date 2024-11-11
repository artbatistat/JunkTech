import PageFooter from "../layout/PageFooter";
import PageNavegation from "../layout/PageNavegation";
import './map.css'

export const Client = () => {
    return(
        <>
        <PageNavegation></PageNavegation>
        <br/><h1>Client page</h1>
        <div class="container-fluid">
            <div class="row">
            <div id="map"></div>
            </div>
        </div>

        <PageFooter></PageFooter>
        </>
    )
}

