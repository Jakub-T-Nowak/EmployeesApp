import React from "react";
import Input from "./Input";

const InputText = React.forwardRef(
    ({ submit, namee, min, max, errorMessage }, ref) => {
        const validation = value => value.length >= min && value.length <= max;

        return (
            <Input
                ref={ref}
                submit={submit}
                namee={namee}
                min={min}
                max={max}
                errorMessage={errorMessage}
                validation={validation}
                type="text"
            />
        );
    }
);

export default InputText;
