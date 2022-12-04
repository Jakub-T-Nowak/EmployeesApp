import React, { Fragment, useState } from "react";
import Form from "../form/Form";
import Filter from "../filter/Filter.tsx";
import List from "../List/List.tsx";
import DataVisualization from "../dataVisualization/DataVisualization";

import styles from "./Home.module.sass";

import DUMMY_DATA from "../../dataPlaceholder/dummyData.ts";

const HomePage = () => {
    const [data, setData] = useState(DUMMY_DATA);
    const dataHandler = (value) => setData((prev) => [...prev, value]);
    const removeData = (id) => {
        setData((prev) => [...prev.filter((item) => item.id !== id)]);
    };

    return (
        <div className={styles.home}>
            <Form onDataChange={dataHandler} />
            <List items={data} onDataRemoved={removeData} />
            <DataVisualization items={data} />
            <Filter />
        </div>
    );
};

export default HomePage;
