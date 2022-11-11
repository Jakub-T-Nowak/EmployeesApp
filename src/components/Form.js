const Form = (props) => {
    const handleSubmit = (event) => {
        props.sendValue("");
        event.preventDefault();
    };

    const handleChange = (e) => {
        props.sendValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}></input>
        </form>
    );
};

export default Form;
