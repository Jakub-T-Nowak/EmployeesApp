import React, { Fragment, useState } from "react";
import Form from "../form/Form";
import Filter from "../Filter.tsx";
import List from "../List/List.tsx";
import DataVisualization from "../dataVisualization/DataVisualization";

import DUMMY_DATA from "../../dataPlaceholder/dummyData.ts";

const HomePage = () => {
    const [data, setData] = useState(DUMMY_DATA);
    const dataHandler = (value) => setData((prev) => [...prev, value]);

    return (
        <Fragment>
            <Form onDataChange={dataHandler} />
            <Filter />
            <DataVisualization items={data} />
            <List items={data} />
        </Fragment>
    );
};

export default HomePage;
