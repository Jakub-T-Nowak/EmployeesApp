import ListItem from "./ListItem";

import "./List.sass";

const List = ({ items }) => {
    return (
        <div className="list__vrapper">
            {items.map((item) => (
                <ListItem item={item} className="list__item" key={item.id} />
            ))}
        </div>
    );
};

export default List;
