import { useState } from "react";

import "./Component_1.sass";

export default function Component_1() {
    const [color, setColor] = useState("red");

    const clickEvent = () => {
        const newColor = color === "red" ? "blue" : "red";
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
}
