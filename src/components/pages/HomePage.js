import React, { Fragment, useState } from "react";
import Form from "../form/Form";
import Filter from "../filter/Filter.tsx";
import List from "../List/List.tsx";
import DataVisualization from "../dataVisualization/DataVisualization";

import styles from "./Home.module.sass"

import DUMMY_DATA from "../../dataPlaceholder/dummyData.ts";

const HomePage = () => {
    const [data, setData] = useState(DUMMY_DATA);
    const dataHandler = (value) => setData((prev) => [...prev, value]);

    return (
        <div className={styles.home}>
            <Form onDataChange={dataHandler} />
            <List items={data} />
            <DataVisualization items={data} />
            <Filter />
        </div>
    );
};

export default HomePage;
