const ListItem = ({ item: { name, age, solary }, className }) => {
    const text = `${name}, ${age}, ${solary}`;
    return <p className={className}>{text}</p>;
};

export default ListItem;
