import React from "react";
//import {useParams} from "react-router-dom";

import ListItem from "./ListItem.tsx";
import Header from "./Header.tsx";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./styles/List.module.sass";

interface props {
    items: employee[];
}

//const params = useParams();

const List: React.FC<props> = ({ items }) => {
    return (
        <div className={styles.list}>
            <Header />
            <div className={styles.list__wrapper}>
                {items.map((item, i) => (
                    <ListItem item={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default List;
