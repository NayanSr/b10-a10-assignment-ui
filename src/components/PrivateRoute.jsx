import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);

    if(loading){
        return (<div className="flex items-center justify-center mt-32">
            <span className="loading loading-ring loading-lg w-32 h-32 text-red-600"></span>
        </div>)
    }

    if(!user){
        return( 
            <Navigate to='/login'></Navigate>
        )
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;