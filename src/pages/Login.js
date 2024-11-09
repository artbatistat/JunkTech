import PageFooter from "../layout/PageFooter";
import PageNavegation from "../layout/PageNavegation";




export default function Login(){
    return(
        <>
        <PageNavegation></PageNavegation>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="box bg-grey">
                        <form>
                        <h3 style={{padding: "15px"}}>LOGIN</h3>
                        <div class="row">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-3"><input type="radio"/> Cliente</div>
                            <div class="col-sm-3"><input type="radio"/> Empresa</div>
                        </div>
                        <label>E-MAIL:</label>
                        <input type="email" placeholder="Digite seu e-mail" class="form-control login-input"/>
                        <label>SENHA:</label>
                        <input type="password" placeholder="Digite sua senha" class="form-control login-input"/>
                        <a href="#"><p>Esqueceu sua senha?</p></a>
                        <a href="register"><p>Ainda não se cadastrou? Clique aqui e se torne um Junker</p></a>
                        <button type="submit" class="form-control login-button">Entrar</button><br/>
                        </form>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
        <PageFooter></PageFooter>
        </>
    )
}