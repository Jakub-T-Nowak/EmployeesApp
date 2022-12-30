import styles from "./LogInSwitcher.module.sass";

const LogInSwitcher = ({log, onLogInSwtch}) => {
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                type="button"
                onClick={onLogInSwtch}
                disabled={log}
            >
                Log in
            </button>
            <button
                className={styles.button}
                type="button"
                onClick={onLogInSwtch}
                disabled={!log}
            >
                Sign up
            </button>
        </div>
    );
};

export default LogInSwitcher;