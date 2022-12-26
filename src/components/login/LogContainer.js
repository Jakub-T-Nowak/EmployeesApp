import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-store";
import styles from "./LogIn.module.sass";
import LogOut from "./LogOut";
import LogIn from "./LogIn";

const LogContainer = () => {
    const { isLogged } = useContext(AuthContext);

    return (
        <div className={styles.login}>
            {!isLogged && <LogIn />}
            {isLogged && <LogOut />}
        </div>
    );
};

export default LogContainer;
