import React, { useEffect, useState } from "react";
import styles from "./Form.module.sass";

const InputName = p => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        if (p.submit === -1) {
            setTouched(true);
        } else {
            setTouched(false);
            setValue("");
            p.OnSend("");
        }
    }, [p.submit]);

    const ageIsValid = value.length >= 2 && value.length <= 50;
    const inputIsInvalid = touched && !ageIsValid;

    const isHidden = inputIsInvalid ? "" : styles.hidden;
    const isInvalid = inputIsInvalid ? styles.invalid : "";

    const changeDispatcher = e => {
        const value = e.target.value;
        setValue(value);

        if (value.length >= 2 && value.length <= 50) {
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
            <label className={styles.form__label} htmlFor="name">
                Name:
            </label>
            <input
                className={`${styles.form__input} ${isInvalid}`}
                type="text"
                name="name"
                value={value}
                onChange={changeDispatcher}
                onBlur={handleBlur}
            ></input>
            <div className={`${styles.form__warning} ${isHidden}`}>
                {`Min 2 and max 50 characters.`}
            </div>
        </div>
    );
};

export default InputName;
