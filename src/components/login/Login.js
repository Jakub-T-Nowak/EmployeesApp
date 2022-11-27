import React from "react";
import styles from "./Login.module.sass";

const Login = () => {
    return (
        <div className={styles.login}>
            <form>
                <label className={styles.login__label}>User</label>
                <input type="text"></input>
                <label>Login</label>
                <input type="text"></input>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
