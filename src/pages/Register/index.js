import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { useRef, useState, useEffect, useContext} from "react";
import { faCheck,faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './register.css';
import { useNavigate } from "react-router-dom";
import { AuthEmailContext } from "../../contexts/authEmail";

const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const USERNAME_REGEX = /^[a-zA-Z0-9.]+$/;

export const Register = () => {

    const { registerUserEmailHTTP, errMsgPOST, errHTTP} = useContext(AuthEmailContext);

    const navigate = useNavigate();
    const errRef = useRef();
    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validName, setValidName] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    },[])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidName(result);
    },[email])

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    },[pwd,matchPwd])

    useEffect(() =>{
        const result = USERNAME_REGEX.test(username);
        setValidUsername(result);
    },[username])

    useEffect(() => {
        setErrMsg('');
    },[email,pwd,matchPwd,username])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);

        if(!v1 || !v2){
            setErrMsg("Verifique os dados informados.");
            return;
        }else{

            try {
                await registerUserEmailHTTP(email,pwd,username)   
            }catch (err){
                setErrMsg("Falha ao criar conta. Tente novamente.");
                console.log(err)
            } finally {
                setLoading(false);
            }
        }
        
       
    }

    if(errHTTP){
            navigate("/Login")
        }
    

    return(
        <>
        <PageNavegation></PageNavegation>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="box bg-grey">
                        <form onSubmit={handleSubmit}>
                        <h3 style={{padding: "15px"}}>CADASTRO</h3>
                        <p>        
                            <span className="line">
                                Você já é um Junker? <a href="login">Entrar</a><br/>
                            </span>
                        </p>
                        <hr style={{width:"40%"}}/>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        {errMsgPOST && <p style={{ color: "red" }}>{errMsgPOST}</p>}
                        <div class="row">
                                <label htmlFor="email">
                                    E-MAIL:
                                    <span className={validName ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <span className={validName || !email ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    class="form-control login-input"
                                    placeholder="Digite seu e-mail"
                                    ref={emailRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    />
                                <p id="uidnote" className={emailFocus && email && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Precisa conter de 4 à 24 caracteres. <br/>
                                    Deve começar com uma letra.<br/>
                                </p>
                                <br/>

                                <label htmlFor="username">
                                    USUÁRIO:
                                    <span className={validUsername ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <span className={validUsername || !username ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </span>
                                </label>
                                <input 
                                    type="username" 
                                    id="username"
                                    class="form-control login-input"
                                    placeholder="Digite seu usuário"
                                    autoComplete="off"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    aria-describedby="usernamenote"
                                    onFocus={() => setUsernameFocus(true)}
                                    onBlur={() => setUsernameFocus(false)}
                                    />
                                <br/>
                                <p id="usernamenote" className={usernameFocus && !validUsername ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle}/>
                                    O usúario não pode conter caracteres especiais além do ".". <br/>
                                </p>


                                <label htmlFor="password">
                                    SENHA:
                                    <span className={validPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </span>
                                </label>
                                <input 
                                    type="password"
                                    id="password"
                                    placeholder="Digite sua senha" 
                                    class="form-control login-input"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onblur={() => setPwdFocus(false)}
                                />
                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle}/>
                                    A senha deve conter de 8 à 24 caracteres. <br/>
                                    Deve ser incluso letra maiúscula e minúscula,<br/> números e um caracter especial <br/>
                                    <span aria-label="exclamation mark">!</span>
                                    <span aria-label="at symbol">@</span>
                                    <span aria-label="hashtag">#</span>
                                    <span aria-label="dolar sign">$</span>
                                    <span aria-label="percent">%</span>
                                </p> 
                                <br/>
                                <label htmlFor="confirm_pwd">
                                    CONFIRME A SENHA:
                                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </span>
                                </label>

                                <input 
                                    type="password"
                                    id="confirm_pwd"
                                    placeholder="Confirme sua senha"
                                    class="form-control login-input"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onblur={() => setMatchFocus(false)}
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    As senhas não conferem.
                                </p>
                                <br/>

                                <button disabled={loading || !validName || !validPwd || !validMatch || !validUsername}>
                                    {loading ? "Carregando..." : "Registrar"}
                                </button>

                        </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
        <PageFooter></PageFooter>
        </>
    )
}

