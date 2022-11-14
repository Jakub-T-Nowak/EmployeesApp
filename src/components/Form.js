import React, { useState } from "react";

import "./Form.sass";

const Form = (props) => {
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        salary: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onDataChange(employee);
        setEmployee({
            name: "",
            age: "",
            salary: "",
        });
    };

    const handleChange = (e) => {
        setEmployee((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    className="form__input"
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="age">age:</label>
                <input
                    className="form__input"
                    type="number"
                    name="age"
                    min="17"
                    max="70"
                    value={employee.age}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="salary">salary:</label>
                <input
                    className="form__input"
                    type="number"
                    name="salary"
                    min="2000"
                    max="100000"
                    value={employee.salary}
                    onChange={handleChange}
                ></input>
            </div>
            <button type="submit">submit</button>
        </form>
    );
};

export default Form;
