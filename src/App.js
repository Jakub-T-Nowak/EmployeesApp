import { useState } from "react";
import "./App.css";

import Component_1 from "./components/Component_1";
import MyForm from "./components/formCp";
import List from "./components/List";
import DUMMY_DATA from "./dataPlaceholder/dummyData";

function App() {
    const [text, setText] = useState("some text");

    const liftingPropsTest = (value) => {
        setText(value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Component_1 />
                <MyForm sendValue={liftingPropsTest} />
                <span style={{ height: "30px" }}>{text}</span>
                <List items={DUMMY_DATA} />
            </header>
        </div>
    );
}

//reportWebVitals

export default App;
