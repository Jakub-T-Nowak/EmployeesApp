import React, { useContext } from "react";
import { AuthContext } from "store/auth-store";
import styles from "./LogContainer.module.sass";
import LogOut from "./logOut/LogOut";
import LogIn from "./logIn/LogIn";

const LogContainer = () => {
    const { isLogged, firstTime } = useContext(AuthContext);

    return (
        <div className={styles.container}>
            {!isLogged && <LogIn />}
            {isLogged && firstTime && (<div>{"You're succesfully logged in."}</div>)}
            {isLogged && <LogOut />}
        </div>
    );
};

export default LogContainer;
