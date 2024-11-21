import { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { AuthEmailContext } from "../../contexts/authEmail";

const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Login = () => {
    const { signInEmailHTTP, signInEmail, signed } = useContext(AuthEmailContext);

    const emailRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValidEmail = EMAIL_REGEX.test(email);
        const isValidPassword = PWD_REGEX.test(pwd);

        try {
            await signInEmailHTTP(email, pwd);
        } catch (err) {
            setErrMsg("Erro ao autenticar. Tente novamente.");
            console.error(err);
        }
    };

    if (signed) {
        return <Navigate to="/Client" />;
    }

    return (
        <>
            <PageNavegation />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="box bg-grey">
                            <h3 style={{ padding: "15px" }}>LOGIN</h3>
                            <hr style={{width:"30%"}}/>
                            {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">E-MAIL:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control login-input"
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
                                    className="form-control login-input"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                /><br/>
                                <a href="register">
                                    <p>
                                        Ainda não se cadastrou? Clique aqui e se torne um Junker
                                    </p>
                                </a>
                                <button type="submit" className="form-control login-button">
                                    Entrar
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