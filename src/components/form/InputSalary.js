import React, { useEffect, useState } from "react";
import styles from "./Form.module.sass";

const InputSalary = p => {
    const [age, setAge] = useState("");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        setTouched(false);
        setAge("");
    }, [p.submit]);

    const ageIsValid = age >= 2000 && age <= 100000;
    const inputIsInvalid = touched && !ageIsValid;

    const isHidden = inputIsInvalid ? "" : styles.hidden;
    const isInvalid = inputIsInvalid ? styles.invalid : "";

    const changeDispatcher = e => {
        setAge(e.target.value);
        p.sendAge(e.target.value);
    };

    const handleBlur = () => {
        setTouched(true);
    };

    return (
        <div>
            <label className={styles.form__label} htmlFor="salary">
                Salary:
            </label>
            <input
                className={`${styles.form__input} ${isInvalid}`}
                type="number"
                name="salary"
                min="2000"
                max="100000"
                value={age}
                onChange={changeDispatcher}
                onBlur={handleBlur}
            ></input>
            <div className={`${styles.form__warning} ${isHidden}`}>
                Min 2,000, max 100,000.
            </div>
        </div>
    );
};

export default InputSalary;
