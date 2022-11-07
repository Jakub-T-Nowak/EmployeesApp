import { useState } from "react";
import "./App.css";

import Component_1 from "./components/component_1";
import MyForm from "./components/formComponent";
import { ListItems } from "./components/ListItems";
import DUMMY_DATA from "./dataPlaceholder/dummyData";

function App() {
    console.log("App");
    const [text, setText] = useState("some text XD");

    const liftingPropsTest = (value) => {
        console.log("function called from component_1: ", value);
        setText("text changed");
    };

    return (
        <div className="App">
            <header className="App-header">
                <Component_1 name="nameProp" functionProp={liftingPropsTest} />
                <MyForm />
                <ListItems items={DUMMY_DATA} />
                <span>{text}</span>
            </header>
        </div>
    );
}

//reportWebVitals

export default App;
