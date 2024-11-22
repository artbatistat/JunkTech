import { getAuth} from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useEffect, useState,createContext} from "react";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({children}) => {

const auth = getAuth(app);
const [user,setUser] = useState(null);
const [errMsgPOST, setErrMsgPOST] = useState('');

const [signed, setSigned] = useState(() => {
  const storedValue = sessionStorage.getItem("signed");
  return storedValue === "true";
});

useEffect(() => {
  const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
  if (sessionUser) {
    setUser(JSON.parse(sessionUser));
    setSigned(true);  // Se o usuário estiver presente na sessão, consideramos que está logado
  }
}, []);

const signInEmailHTTP = async (email,pwd) =>{

  try{
          var data = JSON.stringify({
            email: email,
            password: pwd,
            user_type: 1
          })

          const response = await fetch('http://cors-anywhere.herokuapp.com/http://junktech.vercel.app/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
          });
          if(response.status === 200){
            const resultPOST = await response.json();
            const token = JSON.stringify(resultPOST.access_token)
            const arrayToken = token.split('.');
            const tokenPayload = JSON.stringify(JSON.parse(atob(arrayToken[1])));
            sessionStorage.setItem("@AuthFirebase:token",token);
            sessionStorage.setItem("@AuthFirebase:user",tokenPayload);
            sessionStorage.setItem("signed", "true");
            setSigned(true);
          }
          else if(response.status === 401){                            
            setErrMsgPOST("E-mail ou Senha inválida. Tente novamente.");
          }
          else if(response.status === 429){
            setErrMsgPOST("Diversas tentativas erradas realizadas. Tente novamente mais tarde.")
          }
          else{
            setErrMsgPOST(`HTTP error! Status: ${response.status}`);
          }

  }catch(error){
    console.log(error)
  }

};


const signOutEmail = () => {
  sessionStorage.removeItem("@AuthFirebase:token");
  sessionStorage.removeItem("@AuthFirebase:user");
  sessionStorage.removeItem("signed");
  setSigned(false);
};

  useEffect(() => {
    console.log("Signed atualizado no Context:", signed);
}, [signed]);

return (
  <AuthEmailContext.Provider value={{ signInEmailHTTP, signOutEmail ,signed,errMsgPOST}}>
    {children}
  </AuthEmailContext.Provider>
)};
