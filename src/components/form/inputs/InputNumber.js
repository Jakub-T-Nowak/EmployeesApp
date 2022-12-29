import React from "react";
import Input from "./Input";

const InputNumber = ({
    onSend,
    submit,
    namee,
    min,
    max,
    errorMessage,
}) => {
    const validation = value => value >= min && value <= max;
    return (
        <Input
            onSend={onSend}
            submit={submit}
            namee={namee}
            min={min}
            max={max}
            errorMessage={errorMessage}
            validation={validation}
            type="number"
        />
    );
};

export default InputNumber;
