import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-store";
import styles from "./Header.module.sass";
import { NavLink } from "react-router-dom";

const Header = () => {
    const ctx = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles["header__app-name"]}>Employee App</div>
            <nav className={styles.header__navigation}>
                {ctx.isLogged && (
                    <NavLink
                        to="/home"
                        className={styles.header__link}
                        activeClassName={styles.active}
                    >
                        Home
                    </NavLink>
                )}
                <NavLink
                    to="/login"
                    className={styles.header__link}
                    activeClassName={styles.active}
                >
                    {ctx.isLogged ? "Log out" : "Log in"}
                </NavLink>
                <NavLink
                    to="/settings"
                    className={styles.header__link}
                    activeClassName={styles.active}
                >
                    <span className="material-symbols-outlined">settings</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
