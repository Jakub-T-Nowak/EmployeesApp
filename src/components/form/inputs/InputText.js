import React from "react";
import Input from "./Input";

const InputText = ({
    onSend,
    submit,
    namee,
    min,
    max,
    errorMessage,
}) => {
    const validation = value => value.length >= min && value.length <= max;
    return (
        <Input
            onSend={onSend}
            submit={submit}
            namee={namee}
            min={min}
            max={max}
            errorMessage={errorMessage}
            validation={validation}
            type="text"
        />
    );
};

export default InputText;
