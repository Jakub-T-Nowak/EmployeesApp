import { useState } from "react";

const MyForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        console.log("-submit-");
        setText("");
        event.preventDefault();
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={text} onChange={handleChange}></input>
            </form>
            <p>{text}</p>
        </div>
    );
};

export default MyForm;
