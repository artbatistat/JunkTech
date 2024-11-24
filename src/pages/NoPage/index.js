import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import img_error404 from "./img/error404.png";
import "./noPage.css"




export const NoPage = () =>{
    return(
        <>
        <PageNavegation></PageNavegation>
        <div className="container">
            <div className="row box main">
                <h1>Ops...página não encontrada</h1>
                <img className="img_404" src={img_error404}/>
                <h3>Erro 404...</h3>
            </div>
        </div>
        <PageFooter></PageFooter>
        </>
    )
}