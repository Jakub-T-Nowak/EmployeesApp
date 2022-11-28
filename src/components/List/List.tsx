import React from "react";
//import {useParams} from "react-router-dom";

import ListItem from "./ListItem.tsx";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./List.module.sass";

interface props {
    items: employee[];
}

//const params = useParams();

const List: React.FC<props> = ({ items }) => {
    return (
        <div className={styles.list}>
            {items.map((item, i) => (
                <ListItem item={item} key={i} />
            ))}
        </div>
    );
};

export default List;
