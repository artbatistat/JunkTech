import PageFooter from "../../layout/PageFooter";
import PageNavegation from "../../layout/PageNavegation";
import HelpChatbot from "./chatbot";
import "./help.css"
    
export const Help = () => {
    return(
        <>
        <PageNavegation/>
        
        <div class="container-fluid help">
            <div class="row box">
                <div className="col-sm-8">
                <h2>FAQ</h2>
                <hr className="hr_Title" />
                    <div className="row main_help">
                        <br/>
                        <p>
                            Nosso time de ajuda está sempre disponível para resolver todos os seus problemas.
                            <hr/>
                            <ol className="FAQ_list">
                                <li>
                                    <p> Antes de tudo verifique com nosso o chat Jubileu, se sua dúvida pode ser respondida antes de seguir nos próximos passos.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis tincidunt massa, eu sollicitudin sem pulvinar vel. Maecenas ac eleifend nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sapien est, fermentum in purus quis, mollis aliquam ex. Morbi vitae justo ipsum. Maecenas sed libero in massa cursus faucibus eu sed lectus. Mauris id scelerisque nibh. Nunc cursus auctor ex, vel ultrices dui. Etiam interdum maximus lectus, volutpat sollicitudin erat gravida elementum. Integer elit urna, consectetur in orci sit amet, dignissim ornare arcu. Proin id justo quis sapien blandit tempus. </p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis tincidunt massa, eu sollicitudin sem pulvinar vel. Maecenas ac eleifend nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sapien est, fermentum in purus quis, mollis aliquam ex. Morbi vitae justo ipsum. Maecenas sed libero in massa cursus faucibus eu sed lectus. Mauris id scelerisque nibh. Nunc cursus auctor ex, vel ultrices dui. Etiam interdum maximus lectus, volutpat sollicitudin erat gravida elementum. Integer elit urna, consectetur in orci sit amet, dignissim ornare arcu. Proin id justo quis sapien blandit tempus. </p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis tincidunt massa, eu sollicitudin sem pulvinar vel. Maecenas ac eleifend nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sapien est, fermentum in purus quis, mollis aliquam ex. Morbi vitae justo ipsum. Maecenas sed libero in massa cursus faucibus eu sed lectus. Mauris id scelerisque nibh. Nunc cursus auctor ex, vel ultrices dui. Etiam interdum maximus lectus, volutpat sollicitudin erat gravida elementum. Integer elit urna, consectetur in orci sit amet, dignissim ornare arcu. Proin id justo quis sapien blandit tempus. </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                </div>
                <div className="col-sm-4 chat_box">
                    <h2>Chat de ajuda</h2>
                    <hr className="hr_Title" />
                    <HelpChatbot/>
                </div>
            </div>
        </div>

        <PageFooter/>
        </>
    )
}