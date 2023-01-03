import "./style.css";

const Navbar = (props) => {
  const navItems = ["Home", "About", "Shop", "Contact"];
  const navItemsList = navItems.map((name, index) => {
    return (
      <li key={index}>
        <a href={name}>{name}</a>
      </li>
    );
  });
  return (
    <nav className="navbar-wrapper">
      <ul>{navItemsList}</ul>
    </nav>
  );
};

export default Navbar;
