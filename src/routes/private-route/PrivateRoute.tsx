import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "../../types/component.types";
import useAuthContext from "../../hooks/useAuthContext";

const PrivateRoute = (props: PrivateRouteProps) => {

    const { token } = useAuthContext();

    console.log("token" + token);
    
    return (
        <>
            {
                token ? props.element : <Navigate to='/'/>
            }
        </>
    );

}

export default PrivateRoute;