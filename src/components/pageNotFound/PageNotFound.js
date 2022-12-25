import React from "react";
import styles from "./PageNotFound.module.sass";

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div>{"Page not found. Sorry :)"}</div>
        </div>
    );
};

export default PageNotFound;
