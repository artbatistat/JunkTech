import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import HelpChatbot from "./chatbot";
    
export const Help = () => {
    return(
        <>
        <PageNavegation></PageNavegation>
        
        <div class="container">
            <div class="row">
            <h1>Help Page</h1>
            <HelpChatbot/>

            </div>
        </div>

        <PageFooter></PageFooter>
        </>
    )
}