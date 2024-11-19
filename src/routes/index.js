import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthEmailContext } from "../contexts/authEmail";

export const PrivateRoutes = ({ children }) => {
    const { signed } = useContext(AuthEmailContext);
    console.log("Signed Status no PrivateRoutes:", signed); // Verifica o valor
    return signed ? children : <Navigate to="/Login" />;
};