import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useEffect, useState,createContext, useContext } from "react";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({children}) => {

const auth = getAuth(app);
const [user,setUser] = useState(null);
const [signed, setSigned] = useState(false);

useEffect(() => {
    const loadStoreAuth = () =>{
        const sessionToken = sessionStorage.getItem("@AuthFirebase:token") 
        const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
        if(sessionToken && sessionUser){
            setUser(sessionUser);
        }
    }
})

useEffect(() => {
  const sessionUser = sessionStorage.getItem("@AuthFirebase:user");
  if (sessionUser) {
    setUser(JSON.parse(sessionUser));
    setSigned(true);  // Se o usuário estiver presente na sessão, consideramos que está logado
  }
}, []);

    const signInEmail = (email,pwd) =>{

        signInWithEmailAndPassword(auth, email, pwd)
              .then((userCredential) => {
                console.log("login successfully")
                const user = userCredential.user;
                const jsonString = JSON.stringify(user);
                const userLogged = JSON.parse(jsonString)
                setUser(user)
                const token = (userLogged["stsTokenManager"]["accessToken"])
                sessionStorage.setItem("@AuthFirebase:token",token);
                sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(user));
              })
              .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
              });

    };

    return (
        <AuthEmailContext.Provider value={{ signInEmail, signed,setSigned}}>
          {children}
        </AuthEmailContext.Provider>
      )
    };
