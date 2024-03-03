import PropTypes from "prop-types";

//how to render lists in react

function List(props) {
  const itemList = props.items;
  const category = props.category;

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); -> a..
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); -> z..
  //fruits.sort((a, b) => a.calories - b.calories); -> numeric
  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3 className="list-category">{category}:</h3>
      <ol className="list-items">{listItems}</ol>;
    </div>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Items category",
  items: [],
};

export default List;
