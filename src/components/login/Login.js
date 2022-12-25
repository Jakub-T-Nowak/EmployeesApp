import React, { useRef } from "react";
import FirebaseAuthService from "../../FirebaseAuthService";
import styles from "./Login.module.sass";

const LogIn = () => {
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

    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.login__label}>User</label>
            <input type="text" ref={userNameRef} />
            <label>Login</label>
            <input type="text" ref={passwordRef} />
            <button type="submit">Log in</button>
        </form>
    );
};

export default LogIn;
