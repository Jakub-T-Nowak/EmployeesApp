import React from "react";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./Item.module.sass";

interface props {
    item: employee;
}

const ListItem: React.FC<props> = ({ item: { name, age, salary } }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__age}>{age}</div>
            <div className={styles.item__salary}>{salary}</div>
        </div>
    );
};

export default ListItem;
