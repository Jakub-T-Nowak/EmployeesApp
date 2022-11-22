import React from "react";
import { employee } from "../../dataPlaceholder/dummyData";

interface props {
    item: employee;
    className: string;
}

const ListItem: React.FC<props> = ({
    item: { name, age, salary },
    className,
}) => {
    const text = `${name}, ${age}, ${salary}`;
    return <p className={className}>{text}</p>;
};

export default ListItem;
