import React from "react";
//import {useParams} from "react-router-dom";

import ListItem from "./ListItem.tsx";
import Header from "./Header.tsx";
import NoDataInfo from "../noDataInfo/NoDataInfo";
import { employee } from "../../dataPlaceholder/dummyData";

import styles from "./styles/List.module.sass";

interface props {
    items: employee[];
    onDataRemoved: (id: number) => void;
}

//const params = useParams();

const List: React.FC<props> = ({ items, onDataRemoved }) => {
    return (
        <div className={styles.list}>
            <Header />
            <div className={styles.list__wrapper}>
                {!items.length && <NoDataInfo />}
                {items.map((item) => (
                    <ListItem
                        item={item}
                        key={item.id}
                        onDataRemoved={onDataRemoved}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
