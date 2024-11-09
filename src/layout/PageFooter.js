import React from "react";
import "../js/utils"

const PageFooter = () => {
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
                    <a href="signup.html"><p>Seja um Junker</p></a>
                    <a href="login.html"><p>Login</p></a>
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