import { useContext } from "react";
import Autocomplete from "react-google-autocomplete";
import { AuthEmailContext } from "../../contexts/authEmail";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import "./profile.css"

<Autocomplete
    apiKey="AIzaSyAEY2Hu2axCPl8IVCPz9gmglcaK_jGDUW8"
    onPlaceSelected={(place) => {
        console.log(place);
    }}
/>;

export const Profile = () => {
    const { user } = useContext(AuthEmailContext)

    if (!user) {
        return '';
    }

    return (
        <>
            <PageNavegation></PageNavegation>

            <div className="container profile">
                <div className="row">
                    <div className="box">

                        <h1>Perfil</h1><br/>
                        <label htmlFor="name">Nome</label><br/>
                        <input 
                        className="name"
                        placeholder={user.name}
                        disabled
                        /><br/>
                        {user.user_type === 0 && <><label htmlFor="cpf">CPF</label><br/></>}
                        {user.user_type === 1 && <><label htmlFor="cpf">CNPJ</label><br/></>}
                        <input 
                        className="cnpj_cpf"
                        placeholder={user.cnpj_cpf}
                        disabled
                        /><br/>
                        <label htmlFor="email">E-mail</label><br/>
                        <input 
                        className="email"
                        placeholder={user.email}
                        disabled
                        /><br/>
                        <label htmlFor="username">Usuário</label><br/>
                        <input 
                        className="username"
                        placeholder={user.username}
                        disabled
                        /><br/>
                        <label htmlFor="phone">Telefone</label><br/>
                        <input 
                        className="phone"
                        placeholder={user.phone}
                        disabled
                        /><br/>

                    </div>
                </div>
            </div>

            <PageFooter></PageFooter>
        </>
    )
}