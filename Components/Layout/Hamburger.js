import styleHam from "./Hamburger.module.css";
import Link from "next/link";
import { useState } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onHide} className={styleHam.backdrop}></div>;
};

const Hamburger = () => {
  const [hamLinks, setHamLinks] = useState(false);

  const showLinksHandler = () => {
    setHamLinks((prevState) => !prevState);
  };

  return (
    <div className={styleHam.all}>
      <button onClick={showLinksHandler} className={styleHam.ham} type="button">
        <div></div>
        <div></div>
        <div></div>
      </button>
      {hamLinks && (
        <div onClick={showLinksHandler} className={styleHam.links}>
          <Link className={styleHam.link} href={"/"}>
            Home
          </Link>
          <Link className={styleHam.link} href={"/recipes"}>
            Recipes
          </Link>
          <Link className={styleHam.link} href={"/add-recipe"}>
            Add Recipe
          </Link>
        </div>
      )}
      {hamLinks && <Backdrop onHide={showLinksHandler} />}
    </div>
  );
};

export default Hamburger;
