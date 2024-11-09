import React from "react";

const PageNavegation = () => {
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
                    <li><a href="login">LOGIN</a></li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default PageNavegation;