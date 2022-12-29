import React, { useEffect, useState } from "react";
import styles from "../Form.module.sass";

const Input = ({
    onSend,
    submit,
    namee,
    min,
    max,
    errorMessage,
    validation,
    type,
}) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (submit === -1) {
            setTouched(true);
        } else {
            setTouched(false);
            setValue("");
            onSend("");
        }
    }, [submit]);

    const isValid = validation(value);
    const inputIsInvalid = touched && !isValid;

    const isHidden = inputIsInvalid ? "" : styles.hidden;
    const isInvalid = inputIsInvalid ? styles.invalid : "";

    const changeDispatcher = e => {
        const value = e.target.value;
        setValue(value);

        if (validation(value)) {
            onSend(value);
        } else {
            onSend(null);
        }
    };

    const handleBlur = () => {
        setTouched(true);
    };

    const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <div>
            <label className={styles.form__label} htmlFor={namee}>
                {`${capitalizeFirstLetter(namee)}:`}
            </label>
            <input
                className={`${styles.form__input} ${isInvalid}`}
                type={type}
                name={namee}
                min={min}
                max={max}
                value={value}
                onChange={changeDispatcher}
                onBlur={handleBlur}
            ></input>
            <div className={`${styles.form__warning} ${isHidden}`}>
                {errorMessage}
            </div>
        </div>
    );
};

export default Input;
