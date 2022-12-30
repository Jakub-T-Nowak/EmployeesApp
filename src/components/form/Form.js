import React, { useState, createRef } from "react";
import InputNumber from "./inputs/InputNumber";
import InputText from "./inputs/InputText";

import styles from "./Form.module.sass";

const Form = props => {
    const [submit, setSubmit] = useState(0);
    const refName = createRef();
    const refAge = createRef();
    const refSalary = createRef();

    const handleSubmit = event => {
        event.preventDefault();

        const valName = refName.current.checkValidity();
        const valAge = refAge.current.checkValidity();
        const valSalary = refSalary.current.checkValidity();
        const name = refName.current.value;
        const age = refAge.current.value;
        const salary = refSalary.current.value;

        if (valName && valAge && valSalary) {
            props.onDataChange({ name, age, salary });
            // adding number indicates that input should be reseted
            setSubmit(p => ++p);
        } else {
            // -1 indicates that input should be validated
            setSubmit(-1);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <InputText
                ref={refName}
                submit={submit}
                namee="Name"
                min={2}
                max={50}
                errorMessage="Min length 2, max length 50."
            />
            <InputNumber
                ref={refAge}
                submit={submit}
                namee="age"
                min={17}
                max={70}
                errorMessage="Min value 17, max value 70."
            />
            <InputNumber
                ref={refSalary}
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
