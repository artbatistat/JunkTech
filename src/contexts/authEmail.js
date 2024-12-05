import { useEffect, useState,createContext} from "react";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({children}) => {

const [user,setUser] = useState(null);
const [errMsgPOST, setErrMsgPOST] = useState('');
const [errHTTP, setErrHTTP] = useState(false);
const [user_Type, setUser_Type] = useState(null);

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
            password: pwd
          })

          const response = await fetch('https://junktech.vercel.app/signin', {
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
            setUser_Type(JSON.parse(tokenPayload).user_type)
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

const registerUserEmailHTTP = async (email,pwd,username,name,phone,cnpj_cpf,userType) =>{

  try{
          var data = JSON.stringify({
            email: email,
            password: pwd,
            username: username,
            phone: phone,
            name: name,
            cnpj_cpf: cnpj_cpf,
            user_type: userType
          })

          console.log(data)

          const response = await fetch('https://junktech.vercel.app/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data
          });
          if(response.status === 200 || response.status === 201){
            setErrMsgPOST(`Conta criada com sucesso!`)
            setErrHTTP(true)
          }else if(response.status === 500){
            setErrMsgPOST(`E-mail ou CPF/CNPJ já utilizado.`)
          }
          else{
            const resulterror = await response.json()
            setErrMsgPOST(`Erro: ${(resulterror["message"])[0]}`);
          }

  }catch(error){
    console.log(error)
  }

};


const signOutEmail = () => {
  sessionStorage.removeItem("@AuthFirebase:token");
  sessionStorage.removeItem("@AuthFirebase:user");
  sessionStorage.removeItem("signed");
  setUser_Type(null)
  setSigned(false);
};

  useEffect(() => {
    console.log("Signed atualizado no Context:", signed);
    
}, [signed]);


return (
  <AuthEmailContext.Provider value={{ signInEmailHTTP, signOutEmail , registerUserEmailHTTP, signed, errMsgPOST , errHTTP , user, user_Type}}>
    {children}
  </AuthEmailContext.Provider>
)};