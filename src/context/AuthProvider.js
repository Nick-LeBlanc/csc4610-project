import { createContext, useState } from "react";


const AuthContext = createContext("");
export function AuthProvider({children}){
    let [auth, setAuth] = useState({user:"", user_id:-1});

    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;