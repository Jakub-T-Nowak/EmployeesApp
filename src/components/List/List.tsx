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
            {items.map((item) => (
                <ListItem item={item} className="list__item" key={item.id} />
            ))}
        </div>
    );
};

export default List;
