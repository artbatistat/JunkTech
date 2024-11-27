import React, { useContext } from "react";
import "../js/utils"
import { AuthEmailContext } from "../contexts/authEmail";

const PageFooter = () => {

    const {signed} = useContext(AuthEmailContext)

    return (
        <>
        <footer class="container-fluid text-center">
            <hr/>
            <div class="row">
                <div class="col-sm-4">
                    <b>Contato</b>
                    <hr style={{
                        width:"50%",
                    }}/>
                    <p><span class="glyphicon glyphicon-map-marker"></span>Betim - MG</p>
                    <p><span class="glyphicon glyphicon-envelope"></span> contato@junktech.com</p>
                </div>
                <div class="col-sm-4">
                    <b>Navegação</b>
                    <hr style={{
                        width:"50%",
                    }}/>
                    <a href="index.html"><p>Home</p></a>
                    <a href="help.html"><p>Ajuda</p></a>
                    {/*SIGNED STATUS : NO */}
                    {!signed && (<a href="register"><p>Se torne um Junker</p></a>)}
                    {!signed && (<a href="login" className="login"><p>Login</p></a>)}

                    {/*SIGNED STATUS : YES */}
                    {signed && (<a href="CollectionPoints" className="client"><p>Pontos de coleta</p></a>)}     
                    {signed && (<a href="profile" className="profile"><p>Perfil</p></a>)}     
                </div>
                <div class="col-sm-4">
                    <b>Siga-nos</b>
                    <hr style={{
                        width:"50%",
                    }}/>
                    <p>@junktech</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default PageFooter;