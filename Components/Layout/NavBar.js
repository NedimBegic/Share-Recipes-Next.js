import styleNavBar from "../Layout/NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={styleNavBar.nav}>
      <li>Home</li>
      <li>Recipes</li>
      <li>Add Recipe</li>
    </ul>
  );
};

export default NavBar;
