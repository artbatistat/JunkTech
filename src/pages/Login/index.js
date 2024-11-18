import { useContext, useRef,useState } from "react";
import { Navigate } from "react-router-dom";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { AuthEmailContext } from "../../contexts/authEmail";

const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Login = () => {

    const {signInEmail, signed} = useContext(AuthEmailContext);

    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd] = useState(false);

    const [setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValidEmail  = EMAIL_REGEX.test(email);
        const isValidPassword  = PWD_REGEX.test(pwd);
        if(!isValidEmail || !isValidPassword){
            setErrMsg("Invalid Entry");
            return;
        }
        try {

           await signInEmail(email,pwd)

        }catch (err){
            console.log(err)
        }
    }

    if(!signed){
        return(
            <>
            <PageNavegation></PageNavegation>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="box bg-grey">
                            <h3 style={{padding: "15px"}}>LOGIN</h3>
                            <form onSubmit={handleSubmit}>
                            <label htmlFor="email">E-MAIL:</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    class="form-control login-input"
                                    ref={emailRef}
                                    placeholder="Digite seu e-mail"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    />
                            <label htmlFor="password">SENHA:</label>
                                <input 
                                    type="password"
                                    id="password"
                                    placeholder="Digite sua senha" 
                                    class="form-control login-input"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                />
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
    else{
        return <Navigate to="/Client" />;
    }
    
}
