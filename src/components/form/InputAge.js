import React, { useEffect, useState } from "react";
import styles from "./Form.module.sass";

const InputAge = p => {
    const [age, setAge] = useState("");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (p.submit === -1) {
            setTouched(true);
        } else {
            setTouched(false);
            setAge("");
            p.OnSend("");
        }
    }, [p.submit]);

    const ageIsValid = age >= 17 && age <= 70;
    const inputIsInvalid = touched && !ageIsValid;

    const isHidden = inputIsInvalid ? "" : styles.hidden;
    const isInvalid = inputIsInvalid ? styles.invalid : "";

    const changeDispatcher = e => {
        const value = e.target.value;
        setAge(value);
        
        if (value >= 17 && value <= 70) {
            p.OnSend(value);
        } else {
            p.OnSend(null);
        }
    };

    const handleBlur = () => {
        setTouched(true);
    };

    return (
        <div>
            <label className={styles.form__label} htmlFor="age">
                Age:
            </label>
            <input
                className={`${styles.form__input} ${isInvalid}`}
                type="number"
                name="age"
                min="17"
                max="70"
                value={age}
                onChange={changeDispatcher}
                onBlur={handleBlur}
            ></input>
            <div className={`${styles.form__warning} ${isHidden}`}>
                Min 17, max 70.
            </div>
        </div>
    );
};

export default InputAge;


/** universal input:
     * name, 
     * type, 
     * min/max, 
     * error message, 
     * css class,
     * validation
     * 
     * submit
     * calback value
     *  */
    
    /** two kinds of input (number, text):
     * name
     * error message
     * css class
     * validation
     * 
     * min/max
     * 
     * submit
     * calback value
    */