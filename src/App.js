import { useState } from "react";
import "./App.css";

import Component_1 from "./component_1";
import MyForm from "./formComponent";

function App() {
  console.log("App");
  const [text, setText] = useState("some text XD");

  const liftingPropsTest = () => {
    console.log("function called from component_1");
    setText("text changed");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Component_1
          name="nameProp"
          functionProp={liftingPropsTest}
        />
        <MyForm />
        <span>{text}</span>
      </header>
    </div>
  );
}

export default App;
