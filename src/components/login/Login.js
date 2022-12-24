import React, { useState, useRef } from "react";
import FirebaseAuthService from "../../FirebaseAuthService";
import styles from "./Login.module.sass";

const Login = () => {
    const [loggState, setLoggState] = useState("");
    FirebaseAuthService.subscribeToAuthChanges(setLoggState);
    console.log(loggState);

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;

        FirebaseAuthService.registerUser(userName, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((e) => console.log(e.message));
    };

    const logOut = () => {
        FirebaseAuthService.logoutUser();
    };

    return (
        <div className={styles.login} onSubmit={handleSubmit}>
            <form>
                <label className={styles.login__label}>User</label>
                <input type="text" ref={userNameRef} />
                <label>Login</label>
                <input type="text" ref={passwordRef} />
                <button type="submit">Log in</button>
            </form>

            <button type="button" onClick={logOut}>
                Log out
            </button>
        </div>
    );
};

export default Login;
