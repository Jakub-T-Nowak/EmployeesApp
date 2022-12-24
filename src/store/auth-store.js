import React, { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

export const AuthContext = React.createContext({
    isLogged: false,
});

const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);

    FirebaseAuthService.subscribeToAuthChanges(setIsLogged);

    return (
        <AuthContext.Provider value={{ isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
