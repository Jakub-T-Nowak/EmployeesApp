import { useState } from "react";

const MyForm = (xyz) => {
    const handleSubmit = (event) => {
        xyz.sendValue("");
        console.log(xyz);
        event.preventDefault();
    };

    const handleChange = (e) => {
        xyz.sendValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}></input>
        </form>
    );
};

export default MyForm;
