import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Form from "./components/form/Form";
import List from "./components/List/List.tsx";
import Header from "./components/header/Header";
import Filter from "./components/Filter.tsx";
import DataVisualization from "./components/dataVisualization/DataVisualization";
import Login from "./components/login/Login";
import DUMMY_DATA from "./dataPlaceholder/dummyData.ts";

import styles from "./App.module.sass";
import "./Body.css";

function App() {
    const [data, setData] = useState(DUMMY_DATA);

    const dataHandler = (value) => setData((prev) => [...prev, value]);

    return (
        <BrowserRouter>
            <Header />
            <div className={styles["main-container"]}>
                <Route path="/home">
                    <Form onDataChange={dataHandler} />
                    <Filter />
                    <DataVisualization items={data} />
                    <List items={data} />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
