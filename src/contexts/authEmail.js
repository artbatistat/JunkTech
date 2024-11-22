import { getAuth} from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useEffect, useState,createContext} from "react";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({children}) => {

const auth = getAuth(app);
const [user,setUser] = useState(null);
const [errMsgPOST, setErrMsgPOST] = useState('');
const [errHTTP, setErrHTTP] = useState(false);

const [signed, setSigned] = useState(() => {
  const storedValue = sessionStorage.getItem("signed");
  return storedValue === "true";
});

useEffect(() => {
  const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
  if (sessionUser) {
    setUser(JSON.parse(sessionUser));
    setSigned(true);
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

const registerUserEmailHTTP = async (email,pwd,username) =>{

  try{
          var data = JSON.stringify({
            email: email,
            password: pwd,
            username: username,
            user_type: 1
          })

          const response = await fetch('http://cors-anywhere.herokuapp.com/http://junktech.vercel.app/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
          });
          if(response.status === 200 || response.status === 201){
            const resultPOST = await response.json();
            setErrMsgPOST(`Conta criada com sucesso!`)
            setErrHTTP(true)
          }else if(response.status === 500){
            setErrMsgPOST(`E-mail já utilizado. Tente outro e-mail.`)
            console.log(response)
          }
          else{
            setErrMsgPOST(`HTTP error! Status: ${response.status}`);
            console.log(response)
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
  <AuthEmailContext.Provider value={{ signInEmailHTTP, signOutEmail , registerUserEmailHTTP, signed, errMsgPOST , errHTTP }}>
    {children}
  </AuthEmailContext.Provider>
)};
