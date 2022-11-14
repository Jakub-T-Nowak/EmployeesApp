import React from "react";
import ListItem from "./ListItem";
import {employee} from"../../dataPlaceholder/dummyData"

import "./List.sass";

interface props {
    items: employee [];
}

const List: React.FC<props> = ({ items }) => {
    return (
        <div className="list__vrapper">
            {items.map((item, i) => (
                <ListItem item={item} className="list__item" key={i} />
            ))}
        </div>
    );
};

export default List;
