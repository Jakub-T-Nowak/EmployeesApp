export function ListItems({ items }) {
    console.log(items);

    return (
        <div>
            {items.map(({ name, age, solary, id }) => (
                <div  key={id}>
                    <p>{`${name}, ${age}, ${solary}`}</p>
                </div>
            ))}
        </div>
    );
}
