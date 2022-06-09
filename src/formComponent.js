const MyForm = () => {

    const handleSubmit = (event) => {
        console.log("-submit-");
        event.preventDefault();
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}></input>
        </form>
    )
}

export default MyForm;