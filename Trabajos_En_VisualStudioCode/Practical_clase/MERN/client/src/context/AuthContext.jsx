import { createContext, useState,useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context  = useContext(AuthContext);
    if(!context) {
        throw new Error("There is no AuthContext");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);


    const singup = async (user)=>{
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
            console.log(error);
        }
    }

    const singin = async (user) => {
        try {
            // eslint-disable-next-line no-undef
            const res = await loginRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data);
        }
    }
    
    return (
        <AuthContext.Provider value={{
            singup,
            singin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}