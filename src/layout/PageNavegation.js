import {React, useContext} from "react";
import { AuthEmailContext } from "../contexts/authEmail";


const PageNavegation = () => {

    const {signed} = useContext(AuthEmailContext)

    console.log(`Signed: ${signed}`)


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
                    <li><a href="register">SE TORNE UM JUNKER</a></li>
                    {/* if (login is 'true' { show user of this person } else { show the tab 'LOGIN' }) */}
                    {!signed && (
                    <li><a href="login" className="login">LOGIN</a></li>
                    )}   
                    {signed && (
                    <li><a href="profile" className="profile">PROFILE</a></li>
                    )}           
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default PageNavegation;