import styleHeader from "../Layout/Header.module.css";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className={styleHeader.header}>
      <h1>Share Recipes</h1>
      <NavBar />
    </div>
  );
};

export default Header;
