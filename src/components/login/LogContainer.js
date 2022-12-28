import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-store";
import styles from "./LogIn.module.sass";
import LogOut from "./LogOut";
import LogIn from "./LogIn";

const LogContainer = () => {
    const { isLogged, firstTime } = useContext(AuthContext);

    return (
        <div className={styles.login}>
            {!isLogged && <LogIn />}
            {isLogged && firstTime && (<div>{"You're succesfully logged in."}</div>)}
            {isLogged && <LogOut />}
        </div>
    );
};

export default LogContainer;
