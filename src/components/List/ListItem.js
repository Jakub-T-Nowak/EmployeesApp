const ListItem = ({ item: { name, age, salary }, className }) => {
    const text = `${name}, ${age}, ${salary}`;
    return <p className={className}>{text}</p>;
};

export default ListItem;
