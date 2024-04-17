import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";
 

 
const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <span className="loading loading-bars ml-[700px] loading-lg"></span>
    }

    if(user){
        return children;
    }
    return ( <Navigate state={location.pathname} to={'/login'}></Navigate>);
};

export default PrivetRoute;