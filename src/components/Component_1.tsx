import React, { useState } from "react";

import "./Component_1.sass";

const Component_1: React.FC = () => {
    const [color, setColor] = useState("red");

    const clickEvent = () => {
        const newColor: string = color === "red" ? "blue" : "red";
        setColor(newColor);
    };

    //props.children

    return (
        <div
            className="my-component"
            onClick={clickEvent}
            style={{ backgroundColor: color }}
        >
            <span>Click</span>
        </div>
    );
};

export default Component_1;
