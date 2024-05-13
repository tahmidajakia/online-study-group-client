import { useContext } from "react";
import { AuthContexts } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    // const location = useLocation()

    const {user,loading} = useContext(AuthContexts);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;