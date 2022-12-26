import React, { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

export const AuthContext = React.createContext({
    isLogged: false,
    firstTime: false,
    setFirstTime: () => {},
});

const AuthContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(null);
    const [firstTime, setFirstTime] = useState(false);
    FirebaseAuthService.subscribeToAuthChanges(setIsLogged);

    return (
        <AuthContext.Provider value={{ isLogged, firstTime, setFirstTime }}>
            {isLogged !== null && children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
