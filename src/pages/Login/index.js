import { useContext, useRef,useState } from "react";
import { Navigate } from "react-router-dom";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../services/firebaseConfig"

const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Login = () => {

    const {signInGoogle, signed} = useContext(AuthGoogleContext)

    async function loginGoogle(){
       await signInGoogle();
    }

    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd] = useState(false);

    const [setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2){
            setErrMsg("Invalid Entry");
            return;
        }
        try {

            await signInWithEmailAndPassword(auth,email,pwd)
            console.log("Login successfully")
            signInWithEmailAndPassword(auth, email, pwd)
              .then((userCredential) => {

                const user = userCredential.user;
                const jsonString = JSON.stringify(user);
                const userLogged = JSON.parse(jsonString)
                const token = (userLogged["stsTokenManager"]["accessToken"])
                sessionStorage.setItem("@AuthFirebase:token",token);
                sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(user));
              })
              .catch((error) => {
                console.log(error)
              });

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
                            <a onClick={loginGoogle} className="signInGoogle">Entrar com google</a>
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
        return <Navigate to="/Client"/>;
    }
    
}