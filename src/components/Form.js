import "./Form.sass";

const Form = (props) => {
    const handleSubmit = (event) => {
        props.sendValue("");
        event.preventDefault();
    };

    const handleChange = (e) => {
        props.sendValue(e.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label for="name">Name:</label>
                <input
                    className="form__input"
                    type="text"
                    name="name"
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label for="age">age:</label>
                <input
                    className="form__input"
                    type="number"
                    name="age"
                    min="17"
                    max="70"
                ></input>
            </div>
            <div>
                <label for="solary">solary:</label>
                <input
                    className="form__input"
                    type="number"
                    name="solary"
                    min="2000"
                    max="100000"
                ></input>
            </div>
        </form>
    );
};

export default Form;
