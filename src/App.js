import { useState } from "react";
import "./App.css";

import Form from "./components/form/Form";
import List from "./components/List/List.tsx";
import Filter from "./components/Filter.tsx";
import DataVisualization from "./components/dataVisualization/DataVisualization";
import DUMMY_DATA from "./dataPlaceholder/dummyData.ts";

function App() {
    const [data, setData] = useState(DUMMY_DATA);

    const dataHandler = (value) => setData((prev) => [...prev, value]);

    return (
        <div className="App App-header">
            <Form onDataChange={dataHandler} />
            <Filter />
            <DataVisualization items={data} />
            <List items={data} />
        </div>
    );
}

//reportWebVitals

export default App;
