import styles from "./Header.module.sass";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header__app-name"]}>Employee App</div>
            <nav className={styles.header__navigation}>
                <NavLink to="/home" className={styles.header__link}>
                    Home
                </NavLink>
                <NavLink to="/login" className={styles.header__link}>
                    Log in
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
