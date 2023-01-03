import "./style.css";
import PizzaItem from "./item";

const MenuItems = () => {
  const pizzaMenu = [
    {
      id: "1",
      image:
        "https://www.14thstreetpizza.com/website/images/pizzasizes/slice-desktop.jpg",
      name: "Original Slice",
      serving: "1",
      price: "599",
    },
    {
      id: "2",
      image:
        "https://www.14thstreetpizza.com/website/images/pizzasizes/slice-desktop.jpg",
      name: "Original Half",
      serving: "3-4",
      price: "1899",
    },
    {
      id: "3",
      image:
        "https://www.14thstreetpizza.com/website/images/pizzasizes/slice-desktop.jpg",
      name: "Original Full",
      serving: "6-8",
      price: "3399",
    },
  ];
  const pizzaGrid = pizzaMenu.map((item, index) => {
    console.log(index, "Map Index");
    return <PizzaItem menuDetails={item} />;
  });
  console.log(pizzaMenu);
  const isLoggedIn = true;
  return (
    <div className="menu_items">
      {isLoggedIn ? pizzaGrid : "Please login first"}
    </div>
  );
};

export default MenuItems;
