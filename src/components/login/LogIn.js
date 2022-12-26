import React, { Fragment, useRef, useState, useContext } from "react";
import { AuthContext } from "../../store/auth-store";
import FirebaseAuthService from "../../FirebaseAuthService";
import styles from "./LogIn.module.sass";

const LogIn = () => {
    const [log, setLog] = useState(false);
    const { setFirstTime } = useContext(AuthContext);
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = event => {
        event.preventDefault();

        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        const firebaseAction = log
            ? FirebaseAuthService.loginUser
            : FirebaseAuthService.registerUser;

        firebaseAction(userName, password)
            .then(userCredential => {
                setFirstTime(true);
                console.log(userCredential);
            })
            .catch(e => console.log(e.message));
    };

    const change = () => {
        setLog(prev => !prev);
    };

    return (
        <Fragment>
            <button type="button" onClick={change}>
                {!log ? "Log in" : "Sign in"}
            </button>
            <form onSubmit={handleSubmit}>
                <label className={styles.login__label}>User</label>
                <input type="text" ref={userNameRef} autoFocus />
                <label>Login</label>
                <input type="text" ref={passwordRef} />
                <button type="submit">{log ? "Log in" : "Sign in"}</button>
            </form>
        </Fragment>
    );
};

export default LogIn;