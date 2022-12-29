import React, { useState } from "react";
import InputAge from "./InputAge";
import InputSalary from "./InputSalary";
import InputName from "./InputName";

import styles from "./Form.module.sass";

const Form = props => {
    const [submit, setSubmit] = useState(0);
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [salary, setSalary] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        //not a very good validation
        if (name && age && salary) {
            props.onDataChange({ name, age, salary });
            setSubmit(p => ++p);
        } else {
            setSubmit(-1);
        }
    };

    const sendNameHandler = name => {
        setName(name);
    };

    const sendAgeHandler = age => {
        setAge(age);
    };

    const sendSalary = salary => {
        setSalary(salary);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputName OnSend={sendNameHandler} submit={submit} />
            <InputAge OnSend={sendAgeHandler} submit={submit} />
            <InputSalary sendAge={sendSalary} submit={submit} />
            <button type="submit">submit</button>
        </form>
    );
};

export default Form;
