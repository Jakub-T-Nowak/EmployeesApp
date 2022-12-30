import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../helperFunctions/helperFunctions";

import styles from "../Form.module.sass";

const Input = React.forwardRef(
    (
        { submit, namee, min, max, errorMessage, validation, type }, ref
    ) => {
        const [value, setValue] = useState("");
        const [touched, setTouched] = useState(false);

        useEffect(() => {
            if (submit === -1) {
                setTouched(true);
            } else {
                setTouched(false);
                setValue("");
            }
        }, [submit]);

        const isValid = validation(value);
        const inputIsInvalid = touched && !isValid;

        const changeDispatcher = e => {
            setValue(e.target.value);
        };

        const handleBlur = () => {
            setTouched(true);
        };

        return (
            <div>
                <label  htmlFor={namee}>
                    {`${capitalizeFirstLetter(namee)}:`}
                </label>
                <input
                    required
                    ref={ref}
                    className={inputIsInvalid ? styles.invalid : undefined}
                    type={type}
                    name={namee}
                    min={type === "number" ? min : undefined}
                    max={type === "number" ? max : undefined}
                    minLength={type === "text" ? min : undefined}
                    maxLength={type === "text" ? max : undefined}
                    value={value}
                    onChange={changeDispatcher}
                    onBlur={handleBlur}
                ></input>
                <aside className={inputIsInvalid ? undefined : styles.hidden}>
                    {errorMessage}
                </aside>
            </div>
        );
    }
);

export default Input;
