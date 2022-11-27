import React, { Fragment } from "react";
import Header from "../header/Header";
import styles from "./Layout.module.sass";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main className={styles["main-container"]}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
