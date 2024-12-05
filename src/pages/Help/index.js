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
                        
                            <p>Nosso time de ajuda está sempre disponível para resolver todos os seus problemas.</p>
                            <hr/>
                            <ol className="FAQ_list">
                            <h4>CLIENTE</h4>
                                <li>
                                    <p><b> Antes de tudo verifique com nosso o chat Jubileu, se sua dúvida pode ser respondida antes de seguir nos próximos passos.</b></p>
                                </li>
                                <li>
                                    <b>Como faço para me cadastrar na plataforma?</b>
                                    <p>Para se cadastrar, clique em "Cadastro", preencha seus dados pessoais como nome, CPF, telefone, e-mail e crie uma senha. Após enviar o formulário, seus dados serão validados e, se tudo estiver correto, você será registrado como cliente.</p>
                                </li>
                                <li>
                                    <b>Como posso encontrar os pontos de coleta mais próximos de mim?</b>
                                    <p>Após se cadastrar e fazer login, vá até a página "Pontos de Coleta". Lá, você verá um mapa com todos os pontos de coleta disponíveis. O sistema mostrará os pontos mais próximos de sua localização atual, juntamente com os dados de cada empresa responsável pela coleta.</p>
                                </li>
                                <li>
                                    <b>Como sei se o ponto de coleta está disponível para o tipo de lixo eletrônico que quero descartar?</b>
                                    <p>As informações sobre o tipo de lixo eletrônico aceito por cada ponto de coleta estarão disponíveis na página de detalhes de cada ponto. Certifique-se de verificar as informações antes de se deslocar até o local.</p>
                                </li>
                                <li>
                                    <b>O que acontece se não houver pontos de coleta próximos?</b>
                                    <p>Caso não haja pontos de coleta próximos a você, você pode entrar em contato diretamente com a empresa através dos dados fornecidos no mapa para verificar outras possibilidades de coleta.</p>
                                </li>
                                <li>
                                    <b>Posso agendar a coleta diretamente pelo aplicativo?</b>
                                    <p>No momento, o aplicativo mostra apenas os pontos de coleta. Para agendar uma coleta, entre em contato diretamente com a empresa responsável por meio das informações fornecidas no aplicativo.</p>
                                </li>
                                </ol>
                                <br/><h3>EMPRESAS</h3>
                                <ol className="FAQ_list">
                                <li>
                                    <b>Como faço para me cadastrar como empresa de coleta de lixo eletrônico?</b>
                                    <p>Para se cadastrar, clique em "Cadastro de Empresa", preencha os dados solicitados, como CNPJ, nome da empresa, telefone, e-mail e dados de login. Após enviar, nossos sistemas validarão as informações e você será registrado como uma empresa de coleta.</p>
                                </li>
                                <li>
                                    <b>Como posso adicionar um ponto de coleta no aplicativo?</b>
                                    <p>Após fazer login como empresa, vá até a página "Pontos de Coleta". Lá, você encontrará campos para adicionar o endereço e os detalhes do ponto de coleta. Preencha todas as informações necessárias e salve para que o ponto de coleta seja atualizado no mapa.</p>
                                </li>
                                <li>
                                    <b>Posso editar ou remover um ponto de coleta já cadastrado?</b>
                                    <p>Sim, você pode editar ou remover um ponto de coleta sempre que necessário. Basta acessar a página "Pontos de Coleta", selecionar o ponto desejado e fazer as alterações ou excluí-lo.</p>
                                </li>
                                <li>
                                    <b>Como posso saber quantos clientes estão próximos ao meu ponto de coleta?</b>
                                    <p>Atualmente, a plataforma não fornece dados específicos sobre a proximidade de clientes. Porém, o ponto de coleta estará visível no mapa para qualquer cliente que tenha acesso à área, facilitando a visibilidade da sua empresa.</p>
                                </li>
                                <li>
                                    <b>Como posso gerenciar os pontos de coleta de diferentes filiais da minha empresa?</b>
                                    <p>Se sua empresa tem várias filiais, você pode cadastrar múltiplos pontos de coleta. Ao adicionar um ponto, basta inserir o endereço e as informações específicas de cada local, e esses pontos aparecerão no mapa para os clientes.</p>
                                </li>
                                <li>
                                    <b>Existe algum custo para cadastrar minha empresa ou os pontos de coleta?</b>
                                    <p>Não há custos para se cadastrar como empresa ou adicionar pontos de coleta. O uso da plataforma é gratuito para as empresas.</p>
                                </li>
                                <li>
                                    <b>Quais são os requisitos para adicionar um ponto de coleta?</b>
                                    <p>O ponto de coleta precisa estar em um endereço válido, e é importante garantir que a empresa tenha capacidade para receber o tipo de lixo eletrônico que será descartado. Verifique se o ponto está preparado para o tipo de serviço que sua empresa oferece.</p>
                                </li>
                                </ol>
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