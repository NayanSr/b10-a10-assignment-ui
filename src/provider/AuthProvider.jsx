import { createContext } from "react";

export const AuthContext= createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


    const user= {name:'Nayan', email:'ns@g.com'};

    const authInfo={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;