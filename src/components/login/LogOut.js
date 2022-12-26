import React from "react";
import FirebaseAuthService from "../../FirebaseAuthService";
import styles from "./Login.module.sass";

const LogOut = () => {
    const logOut = () => {
        FirebaseAuthService.logoutUser();
    };

    return (
        <button type="button" onClick={logOut} className={styles.logout}>
            Log out
        </button>
    );
};

export default LogOut;
