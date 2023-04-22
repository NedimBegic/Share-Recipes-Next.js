import styleHeader from "../Layout/Header.module.css";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";
const Header = () => {
  return (
    <div className={styleHeader.header}>
      <h1>Share Recipes</h1>
      <Hamburger />
      <NavBar />
    </div>
  );
};

export default Header;
