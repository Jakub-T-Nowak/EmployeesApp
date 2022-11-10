import "./listCp.sass"

export function ListItems({ items }) {
    console.log(items);

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
