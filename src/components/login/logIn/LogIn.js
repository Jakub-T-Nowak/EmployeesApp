import React, { Fragment, useRef, useState, useContext } from "react";
import { AuthContext } from "store/auth-store";
import FirebaseAuthService from "FirebaseAuthService";
import LogInSwitcher from "../switcher/logInSwitcher";
import styles from "./LogIn.module.sass";

const LogIn = () => {
    const [log, setLog] = useState(true);
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

    const LogInSwitchHandler = () => {
        setLog(prev => !prev);
    };

    return (
        <Fragment>
            <LogInSwitcher log={log} onLogInSwtch={LogInSwitchHandler} />
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles['input-container']}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        ref={userNameRef}
                        name="email"
                        autoFocus
                    />
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        ref={passwordRef}
                        name="password"
                    />
                </div>
                <button className={styles.button} type="submit">
                    {log ? "LOG IN" : "SIGN UP FOR FREE"}
                </button>
            </form>
        </Fragment>
    );
};

export default LogIn;
