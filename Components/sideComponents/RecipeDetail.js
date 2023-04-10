import styleDetail from "./RecipeDetail.module.css";
import Likes from "../Layout/Likes";

const RecipeDetail = (props) => {
  let colorDiff = "";
  switch (props.item.difficulty) {
    case "easy":
      colorDiff = "#7ef95d";
      break;
    case "medium":
      colorDiff = "#72a4fb";
      break;
    case "hard":
      colorDiff = "#FF0E0E";
  }
  return (
    <div className={styleDetail.all}>
      <h2>{props.item.name}</h2>
      <div className={styleDetail.description}>
        <p>" {props.item.description} "</p>
        <span>
          Rated with <Likes likes={props.item.likes} />
        </span>
      </div>
      <img src={props.item.image} alt="recipe image" />
      <div className={styleDetail.diff}>
        <h4>
          Difficulty of preparation :{" "}
          <span style={{ backgroundColor: colorDiff }}>
            {props.item.difficulty}
          </span>
        </h4>
      </div>
      <div className={styleDetail.about}>
        <p>
          Our {props.item.name} is in our {props.item.type} category with the{" "}
          {props.item.origin} origin. The average time of preparation for this
          meal is {props.item.time} h
        </p>
      </div>
      <div className={styleDetail.ingredients}>
        <h4>Ingredients list:</h4>
        <div className={styleDetail.list}>
          <div className={styleDetail.ingList}>
            {props.item.ingredients.map((item) => (
              <li key={Math.random() * 100}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
