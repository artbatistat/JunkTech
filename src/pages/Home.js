import PageFooter from "../layout/PageFooter.js";
import PageNavegation from "../layout/PageNavegation.js";
import img_ewaste from '../img/ewaste.png'
import '../js/utils.js'




export const Home = () => {
    return(
        <>
        <PageNavegation></PageNavegation>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                    <h2>SOBRE A JUNKTECH</h2>
                    <h4>Somos uma empresa que com os seguintes objetivos:</h4>
                    <ul>
                        <li><p>Facilitar que os nossos usuários encontre um local para o descarte do seu lixo eletrônico.</p></li>
                        <li><p>Fazer com que a empresa de coleta consiga ter uma rotina de coleta e ter mais clientes.</p></li>
                    </ul>
                    </div>
                    <div class="col-sm-4">
                    <img src={img_ewaste} class="glyphicon slideanim"/>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-grey">
                <div class="row">
                    <div class="col-sm-4">
                    <span class="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div class="col-sm-8">
                    <h2>Nossos valores</h2>
                    <h4><strong>Missão:</strong> Trazer a sustentabilidade para mão de nossos usuários.</h4><br/>
                    <p><strong>Visão:</strong> A JunkTech observou que grande parte da população não sabe onde descartar o seu material eletrônico. Com isso descartando este material de qualquer forma, podendo prejudicar o meio ambiente, e não dando a oportunidade de nada ser reciclado. 
                        Com base nisso criamos a JunkTech.</p>
                    </div>
                </div>
            </div>

            <div class="container-fluid text-center">
            <h2>Como funcionamos</h2>
            <br/>
            <div class="row slideanim">
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-off logo-small"></span>
                <h4>SE TORNE UM JUNKER</h4>
                <p>Faça seu cadastro rápido e fácil</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-heart logo-small"></span>
                <h4>PONTO DE COLETA</h4>
                <p>Crie seu ponto de coleta para que empresas possam aceitar sua solicitação</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-lock logo-small"></span>
                <h4>SOLICITE SUA COLETA</h4>
                <p>Solicite sua coleta para empresas que queiram recolher o seu descarte</p>
                </div>
            </div>
            <div class="row slideanim">
                <div class="col-sm-12">
                    <h3>PRONTO DESCARTE FEITO COM SUCESSO!</h3>
                    <p>Não precisa sair de casa, nós vamos até você...</p>
                </div>
            </div>
            </div>
            
        <PageFooter></PageFooter>
        </>
    )
}