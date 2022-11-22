import React, { useReducer } from "react";
import { initialState, ACTIONS, CONDITIONS } from "./FormConsts.ts";

import styles from "./Form.module.sass";

const emailReducer = (prevVal, { type, val: { name, value } = {} }) => {
    let newVal = { ...prevVal };

    switch (type) {
        case ACTIONS.INPUT:
            newVal.value[name] = value;
            break;
        case ACTIONS.BLUR:
            newVal.valid[name] = checkValue[name](value);
            break;
        case ACTIONS.SUBMIT:
            newVal = initialState;
            break;
    }

    return newVal;
};

const checkValue = {
    name: (value) => value.length >= 5 && value.length <= 50,
    age: (value) => value >= CONDITIONS.AGE.MIN && value <= CONDITIONS.AGE.MAX,
    salary: (value) =>
        value >= CONDITIONS.SALARY.MIN && value <= CONDITIONS.SALARY.MAX,
};

const Form = (props) => {
    const [formState, emailDispatcher] = useReducer(emailReducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onDataChange({ ...formState.value });
        emailDispatcher({ type: ACTIONS.SUBMIT });
    };

    const handleChange = ({ target }) => {
        emailDispatcher({ type: ACTIONS.INPUT, val: target });
    };

    const handleBlur = ({ target }) => {
        emailDispatcher({ type: ACTIONS.BLUR, val: target });
    };

    const { valid: { name: nameV, age: ageV, salary: salaryV } } = formState;

    const isHidden = (check) => check === false ? "" : styles.hidden;
    const isInvalid = (check) => check === false ? styles.invalid : "";

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    className={`${styles.form__input} ${isInvalid(nameV)}`}
                    type="text"
                    name="name"
                    value={formState.value.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                <div className={`${styles.form__warning} ${isHidden(nameV)}`}>
                    {`Min ${CONDITIONS.NAME.MIN} and max ${CONDITIONS.NAME.MAX} characters.`}
                </div>
            </div>
            <div>
                <label htmlFor="age">age:</label>
                <input
                    className={`${styles.form__input} ${isInvalid(ageV)}`}
                    type="number"
                    name="age"
                    min={CONDITIONS.AGE.MIN}
                    max={CONDITIONS.AGE.MAX}
                    value={formState.value.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                <div
                    className={`${styles.form__warning} ${isHidden(ageV)}`}
                >
                    {`Min ${CONDITIONS.AGE.MIN}, max ${CONDITIONS.AGE.MAX}.`}
                </div>
            </div>
            <div>
                <label htmlFor="salary">salary:</label>
                <input
                    className={`${styles.form__input} ${isInvalid(salaryV)}`}
                    type="number"
                    name="salary"
                    min={CONDITIONS.SALARY.MIN}
                    max={CONDITIONS.SALARY.MAX}
                    value={formState.value.salary}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></input>
                <div
                    className={`${styles.form__warning} ${isHidden(salaryV)}`}
                >
                    {`Min ${CONDITIONS.SALARY.MIN}, max ${CONDITIONS.SALARY.MAX}.`}
                </div>
            </div>
            <button disabled={!(nameV && ageV && salaryV)} type="submit">
                submit
            </button>
        </form>
    );
};

export default Form;
