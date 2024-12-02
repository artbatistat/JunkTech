import { React, useContext } from "react";
import { AuthEmailContext } from "../contexts/authEmail";

const PageNavegation = () => {

    const {signed,signOutEmail} = useContext(AuthEmailContext)
    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
    const user_Type = user?.user_type;

    return (
        <>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="home">JUNKTECH</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="help">AJUDA</a></li>
                    {/*SIGNED STATUS : NO */}
                    {!signed && ( <li><a href="register">SE TORNE UM JUNKER</a></li>)}
                    {!signed && (<li><a href="login" className="login">LOGIN</a></li>)}

                    {/*SIGNED STATUS : YES */}
                    {signed && user_Type === 0 && (<li><a href="CollectionPoints" className="client">PONTOS DE COLETA</a></li>)}     
                    {signed && user_Type === 1  && (<li><a href="Enterprise" className="enterprise">EMPRESA</a></li>)}     
                    {signed && (<li><a href="profile" className="profile">PERFIL</a></li>)}     
                    {signed && (<li><a onClick={signOutEmail} className="logout">LOGOUT</a></li>)} 
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
    
};

export default PageNavegation;