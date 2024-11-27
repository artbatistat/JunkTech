import { useContext, useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { AuthEmailContext } from "../../contexts/authEmail";
import "./login.css"

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PWD_CHECK = /^.{8,24}$/;

export const Login = () => {

    const { signInEmailHTTP, signed, errMsgPOST } = useContext(AuthEmailContext);

    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [checkPwd,setCheckPwd] = useState(false);
    const [checkFocus, setCheckFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);;
        setValidPwd(result);
    },[pwd])

    useEffect(() =>{
        const result = PWD_CHECK.test(pwd);;
        setCheckPwd(result);
    },[pwd])

    const handleSubmit = async (e) => {
        if(!validPwd){
            setErrMsg("Senha inválida. Tente novamente.");
            e.preventDefault();
        }else{
            setErrMsg("")
            e.preventDefault();
            setLoading(true);
            try {
                await signInEmailHTTP(email, pwd);
            } catch (err) {
                setErrMsg("Erro ao autenticar. Tente novamente.");
                console.error(err);
            }finally {
                setLoading(false);
            }
        }
    };

    if (signed) {
        return <Navigate to="/CollectionPoints" />;
    }

    return (
        <>
            <PageNavegation />
            <div className="container-fluid login">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="box bg-grey">
                            <h3>LOGIN</h3>
                            <hr className="hr_Title"/>
                            {errMsgPOST && <p className="errMsg">{errMsgPOST}</p>}
                            {errMsg && !validPwd &&<p className="errMsg">{errMsg}</p>}
                            <form>
                            <label htmlFor="email">E-MAIL:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control login_input"
                                    ref={emailRef}
                                    placeholder="Digite seu e-mail"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="password">SENHA:</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Digite sua senha"
                                    className="form-control login_input"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={checkPwd ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setCheckFocus(true)}
                                    onblur={() => setCheckFocus(false)}
                                />
                                <p id="confirmnote" className={checkFocus && !checkPwd ? "instructions" : "offscreen"}>
                                    A senha deve conter no mínimo 8 caracteres.
                                </p>
                                <br/>
                                <p>Ainda não se cadastrou? </p>
                                <a href="register" className="register_button">
                                    <p>CLIQUE AQUI E SE TORNE UM JUNKER</p>
                                </a>
                                <button disabled={loading || !checkPwd} onClick={handleSubmit} className={"form-control login_button"} >
                                    {loading ? "Carregando..." : "ENTRAR"}
                                </button>
                                <br />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
            <PageFooter />
        </>
    );
};