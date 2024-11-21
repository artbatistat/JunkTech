import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useEffect, useState,createContext} from "react";

export const AuthEmailContext = createContext({})

export const AuthEmailProvider = ({children}) => {

const auth = getAuth(app);
const [user,setUser] = useState(null);
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

    const signInEmail = async (email,pwd) =>{

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
                sessionStorage.setItem("signed", "true");
                setSigned(true);
              })
              .catch((error) => {
                console.log(error)
              });

    };

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

      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const token = await response.json();
      alert(JSON.stringify(token));
      sessionStorage.setItem("@AuthFirebase:token",token);
      sessionStorage.setItem("signed", "true");
      setSigned(true);
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
        <AuthEmailContext.Provider value={{ signInEmailHTTP, signInEmail, signOutEmail ,signed}}>
          {children}
        </AuthEmailContext.Provider>
      )
    };
