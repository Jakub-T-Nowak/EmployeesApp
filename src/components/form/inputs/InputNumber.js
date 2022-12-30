import React from "react";
import Input from "./Input";

const InputNumber = React.forwardRef(
    ({ submit, namee, min, max, errorMessage }, ref) => {
        const validation = value => value >= min && value <= max;
        return (
            <Input
                ref={ref}
                submit={submit}
                namee={namee}
                min={min.toString()}
                max={max.toString()}
                errorMessage={errorMessage}
                validation={validation}
                type="number"
            />
        );
    }
);

export default InputNumber;
