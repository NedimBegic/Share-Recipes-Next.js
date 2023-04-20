import recipeStyle from "../sideComponents/RecipeItem.module.css";
import Likes from "../Layout/Likes";

import { useRouter } from "next/router";

// need to insert router
const RecipeItem = (props) => {
  // use router to set this recipe url to his id
  const router = useRouter();

  // function to open detailed recipe item
  const showDetailed = () => {
    router.push("/" + props.id);
  };
  // changing bgColor of different food types
  let typeBackground = "";
  switch (props.type) {
    case "burger":
      typeBackground = "#793e2b";
      break;
    case "salads":
      typeBackground = "#71bd46";
      break;
    case "cakes":
      typeBackground = "#f59519";
      break;
    case "dinner":
      typeBackground = "#A4650D";
      break;
    case "soups":
      typeBackground = "#3e5e6e";
  }
  // changing bgColor for difficulty
  let diffBackground = "";
  switch (props.difficulty) {
    case "easy":
      diffBackground = "#7ef95d";
      break;
    case "medium":
      diffBackground = "#72a4fb";
      break;
    case "hard":
      diffBackground = "#FF0E0E";
  }

  return (
    <li onClick={showDetailed} className={recipeStyle.list}>
      <div className={recipeStyle.container}>
        <div className={recipeStyle.divImg}>
          <img src={props.image} alt="recipePhoto" />
        </div>
        <h2>{props.name}</h2>
        <div className={recipeStyle.info}>
          <span style={{ background: typeBackground }}>{props.type}</span>
          <span>{props.time} h</span>
          <span style={{ background: diffBackground }}>{props.difficulty}</span>
        </div>
        <Likes likes={props.likes} />
        <button onClick={showDetailed} type="button">
          Read more
        </button>
        <span className={recipeStyle.date}>{props.date}</span>
      </div>
    </li>
  );
};

export default RecipeItem;
