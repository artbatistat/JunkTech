import { useContext } from "react";
import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import { AuthEmailContext } from "../../contexts/authEmail";





export const Profile = () => {
    const {user} = useContext(AuthEmailContext)

    console.log(user)
    return(
        <>
        <PageNavegation></PageNavegation>
        <br/><h1>Profile Page</h1>
        <h3>Bem-vindo {user.username}</h3>

        <PageFooter></PageFooter>
        </>
    )
}