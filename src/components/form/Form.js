import React, { useState } from "react";
import InputNumber from "./inputs/InputNumber";
import InputText from "./inputs/InputText";

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
            // adding number indicates that input should be reseted
            setSubmit(p => ++p);
        } else {
            // -1 indicates that input should be validated
            setSubmit(-1);
        }
    };

    const sendNameHandler = name => {
        setName(name);
    };

    const sendAgeHandler = age => {
        setAge(age);
    };

    const sendSalaryHandler = salary => {
        setSalary(salary);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputText
                onSend={sendNameHandler}
                submit={submit}
                namee="Name"
                min={2}
                max={50}
                errorMessage="Min length 2, max length 50."
            />
            <InputNumber
                onSend={sendAgeHandler}
                submit={submit}
                namee="age"
                min={17}
                max={70}
                errorMessage="Min value 17, max value 70."
            />
            <InputNumber
                onSend={sendSalaryHandler}
                submit={submit}
                namee="salary"
                min={2000}
                max={100_000}
                errorMessage="Min 2,000, max 100,000."
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default Form;
