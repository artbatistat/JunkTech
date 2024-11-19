import {React, useContext} from "react";
import { AuthEmailContext } from "../contexts/authEmail";

const PageNavegation = () => {

    const {signed,signOutEmail} = useContext(AuthEmailContext)

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
                    {signed && (<li><a href="client" className="client">CLIENTE</a></li>)}     
                    {signed && (<li><a href="profile" className="profile">PROFILE</a></li>)}     
                    {signed && (<li><a onClick={signOutEmail} className="logout">LOGOUT</a></li>)} 
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
    
};

export default PageNavegation;