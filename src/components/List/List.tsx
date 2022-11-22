import React from "react";
import ListItem from "./ListItem.tsx";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./List.module.sass";

interface props {
    items: employee[];
}

const List: React.FC<props> = ({ items }) => {
    return (
        <div className={styles.list}>
            {items.map((item, i) => (
                <ListItem item={item} className={styles.list__item} key={i} />
            ))}
        </div>
    );
};

export default List;
