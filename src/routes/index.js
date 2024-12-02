import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthEmailContext } from "../contexts/authEmail";

export const PrivateRouteCliente = ({ children }) => {
    const { signed } = useContext(AuthEmailContext);

    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
    const user_Type = user?.user_type;

    if (!signed) return <Navigate to="/Login" />;
    if (user_Type !== 0) return <Navigate to="/Home" />;

    return children;
};

export const PrivateRouteEnterprise = ({ children }) => {
    const { signed } = useContext(AuthEmailContext);

    const user = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
    const user_Type = user?.user_type;

    if (!signed) return <Navigate to="/Login" />;
    if (user_Type !== 1) return <Navigate to="/Home" />;

    return children;
};
