import recipeStyle from "../sideComponents/RecipesList.module.css";
import RecipeItem from "./RecipeItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faCake } from "@fortawesome/free-solid-svg-icons";
import { faBowlRice } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";

const RecipesList = (props) => {
  // useState to render content on filter
  // set initial to props.recipes and change it on button click to filter from id in button
  return (
    <div>
      <div className={recipeStyle.filterType}>
        <button className={`${recipeStyle.foodDiv} ${recipeStyle.burgerDiv}`}>
          <FontAwesomeIcon className={recipeStyle.icons} icon={faBurger} />
          <span>Burgers</span>
        </button>
        <button className={`${recipeStyle.foodDiv} ${recipeStyle.cakeDiv}`}>
          <FontAwesomeIcon className={recipeStyle.icons} icon={faCake} />
          <span>Cakes</span>
        </button>
        <button className={`${recipeStyle.foodDiv} ${recipeStyle.soupsDiv}`}>
          <FontAwesomeIcon className={recipeStyle.icons} icon={faBowlRice} />
          <span>Soups</span>
        </button>
        <button className={`${recipeStyle.foodDiv} ${recipeStyle.dinnerDiv}`}>
          <FontAwesomeIcon className={recipeStyle.icons} icon={faUtensils} />
          <span>Dinner</span>
        </button>
        <button className={`${recipeStyle.foodDiv} ${recipeStyle.saladsDiv}`}>
          <FontAwesomeIcon className={recipeStyle.icons} icon={faCarrot} />
          <span>Salads</span>
        </button>
      </div>
      <ul className={recipeStyle.ul}>
        {props.recipes.map((recipe) => (
          <RecipeItem
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
    </div>
  );
};

export default RecipesList;
