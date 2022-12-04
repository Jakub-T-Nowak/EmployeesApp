import React from "react";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./styles/Item.module.sass";

interface props {
    item: employee;
    onDataRemoved: (id: number) => void;
}

const ListItem: React.FC<props> = ({
    item: { name, age, salary, id },
    onDataRemoved,
}) => {
    const handleClick = () => onDataRemoved(id);

    return (
        <div className={styles.item}>
            <div className={styles.item__name}>{name}</div>
            <div className={styles.item__age}>{age}</div>
            <div className={styles.item__salary}>{salary}</div>
            <div className={styles.item__delete}>
                <button className={styles.button} onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ListItem;
