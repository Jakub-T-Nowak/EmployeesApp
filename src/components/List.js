import "./listCp.sass"

const List = ({ items }) => {
    return (
        <div className="list__vrapper">
            {items.map(({ name, age, solary, id }) => (
                <div className="list__item" key={id}>
                    <p>{`${name}, ${age}, ${solary}`}</p>
                </div>
            ))}
        </div>
    );
}

export default List;