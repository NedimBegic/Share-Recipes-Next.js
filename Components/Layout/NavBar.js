import styleNavBar from "../Layout/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <ul className={styleNavBar.nav}>
      <Link className={styleNavBar.links} href={"/"}>
        Home
      </Link>
      <Link className={styleNavBar.links} href={"/recipes"}>
        Recipes
      </Link>
      <Link className={styleNavBar.links} href={"/add-recipe"}>
        Add Recipe
      </Link>
    </ul>
  );
};

export default NavBar;
