import { useState } from "react";
import "./App.css";

import Component_1 from "./components/component_1";
import MyForm from "./components/formCp";
import { ListItems } from "./components/ListCp";
import DUMMY_DATA from "./dataPlaceholder/dummyData";

function App() {
    console.log("App");
    const [text, setText] = useState("some text");

    const liftingPropsTest = (value) => {
        setText(value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Component_1 name="nameProp"/>
                <MyForm sendValue={liftingPropsTest}/>
                <span style={{height:"30px"}}>{text}</span>
                <ListItems items={DUMMY_DATA}/>
            </header>
        </div>
    );
}

//reportWebVitals

export default App;
