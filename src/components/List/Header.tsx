import React from "react";

import styles from "./styles/Header.module.sass";

const Header: React.FC = () => {
    return (
        <div className={styles.item}>
            <div className={styles.item__name}>Name</div>
            <div className={styles.item__age}>Age</div>
            <div className={styles.item__salary}>Salary</div>
        </div>
    );
};

export default Header;
