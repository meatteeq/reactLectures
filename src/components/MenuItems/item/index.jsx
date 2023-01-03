import "../style.css";

const PizzaItem = (props) => {
  console.log(props);
  return (
    <div key={`pizzaItem${props.menuDetails.id}`} className="menu_item">
      <img
        src={props.menuDetails.image}
        alt={`${props.menuDetails.name} Serves ${props.menuDetails.serving}`}
      />
      <h3>{`${props.menuDetails.name} Serves ${props.menuDetails.serving}`}</h3>
      <span>Rs. {props.menuDetails.price}</span>
    </div>
  );
};

export default PizzaItem;
