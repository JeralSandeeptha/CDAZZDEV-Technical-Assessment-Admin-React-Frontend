import { Navigate } from "react-router-dom";
import { PublicRouteProps } from "../../types/component.types";
import useAuthContext from "../../hooks/useAuthContext";

const PublicRoute = (props: PublicRouteProps) => {
    const { token } = useAuthContext();

    return token ? <Navigate to="/dashboard" /> : props.element;
};

export default PublicRoute;