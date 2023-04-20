import React, { useReducer, useState, useRef, useEffect } from "react";
import recipeStyle from "../sideComponents/RecipesList.module.css";
import RecipeItem from "./RecipeItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faCake } from "@fortawesome/free-solid-svg-icons";
import { faBowlRice } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import background from "../../public/background.png";
import saladBack from "../../public/background2.png";
import backOption from "../../public/backOption.jpg";
import Up from "./Up";

// initial render values
let initialRender = {
  burgers: false,
  cakes: false,
  soups: false,
  dinner: false,
  salads: false,
  all: true,
};

// function to change the initial state
const reducerRender = (state, action) => {
  if (action.type == "burgers") {
    return {
      ...initialRender,
      burgers: !state.burgers,
      all: state.burgers,
    };
  }
  if (action.type == "cakes") {
    return {
      ...initialRender,
      cakes: !state.cakes,
      all: state.cakes,
    };
  }
  if (action.type == "soups") {
    return {
      ...initialRender,
      soups: !state.soups,
      all: state.soups,
    };
  }
  if (action.type == "dinner") {
    return {
      ...initialRender,
      dinner: !state.dinner,
      all: state.dinner,
    };
  }
  if (action.type == "salads") {
    return {
      ...initialRender,
      salads: !state.salads,
      all: state.salads,
    };
  }

  return initialRender;
};
const RecipesList = (props) => {
  /* ++++++++++ state for first do to scroll to */
  const forUp = useRef();
  const [upDiv, setUpDiv] = useState(forUp.current);
  /*  enable smooth scroll */
  /* ++++++++++++++div that is scrolled to */
  useEffect(() => {
    setUpDiv(forUp.current);
  }, []);

  const handleScroll = () => {
    upDiv.scrollIntoView({ behavior: "smooth" });
  };
  const [render, dispatchRender] = useReducer(reducerRender, initialRender);
  // dispatch function for rendering content
  const renderBurgers = () => {
    dispatchRender({ type: "burgers" });
  };
  const renderCakes = () => {
    dispatchRender({ type: "cakes" });
  };
  const renderSoups = () => {
    dispatchRender({ type: "soups" });
  };
  const renderDinner = () => {
    dispatchRender({ type: "dinner" });
  };
  const renderSalads = () => {
    dispatchRender({ type: "salads" });
  };
  // useState to render content on filter
  // set initial to props.recipes and change it on button click to filter from id in button
  return (
    <div ref={forUp}>
      <Image
        className={recipeStyle.backgroundImg}
        src={backOption}
        alt="background images"
      />
      <Image
        className={recipeStyle.backgroundImg2}
        src={background}
        alt="background images"
      />
      <Image
        className={recipeStyle.saladBack}
        src={saladBack}
        alt="background images"
      />
      <div className={recipeStyle.filterType}>
        <button
          onClick={renderBurgers}
          className={`${recipeStyle.foodDiv} ${recipeStyle.burgerDiv}`}
        >
          <FontAwesomeIcon className={recipeStyle.icons} icon={faBurger} />
          <span>Burgers</span>
        </button>
        <button
          onClick={renderCakes}
          className={`${recipeStyle.foodDiv} ${recipeStyle.cakeDiv}`}
        >
          <FontAwesomeIcon className={recipeStyle.icons} icon={faCake} />
          <span>Cakes</span>
        </button>
        <button
          onClick={renderSoups}
          className={`${recipeStyle.foodDiv} ${recipeStyle.soupsDiv}`}
        >
          <FontAwesomeIcon className={recipeStyle.icons} icon={faBowlRice} />
          <span>Soups</span>
        </button>
        <button
          onClick={renderDinner}
          className={`${recipeStyle.foodDiv} ${recipeStyle.dinnerDiv}`}
        >
          <FontAwesomeIcon className={recipeStyle.icons} icon={faUtensils} />
          <span>Dinner</span>
        </button>
        <button
          onClick={renderSalads}
          className={`${recipeStyle.foodDiv} ${recipeStyle.saladsDiv}`}
        >
          <FontAwesomeIcon className={recipeStyle.icons} icon={faCarrot} />
          <span>Salads</span>
        </button>
      </div>
      <ul className={recipeStyle.ul}>
        {render.burgers &&
          props.recipes
            .filter((e) => e.type == "burger")
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
        {render.cakes &&
          props.recipes
            .filter((e) => e.type == "cakes")
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
        {render.soups &&
          props.recipes
            .filter((e) => e.type == "soups")
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
        {render.dinner &&
          props.recipes
            .filter((e) => e.type == "dinner")
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
        {render.salads &&
          props.recipes
            .filter((e) => e.type == "salads")
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
        {render.all &&
          props.recipes
            .reverse()
            .map((recipe) => (
              <RecipeItem
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                type={recipe.type}
                time={recipe.time}
                difficulty={recipe.difficulty}
                date={recipe.date}
                likes={recipe.likes}
              />
            ))}
      </ul>
      <Up onClick={handleScroll} />
    </div>
  );
};

export default RecipesList;
