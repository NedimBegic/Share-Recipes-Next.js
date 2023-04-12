import React from "react";
import styleDetail from "./RecipeDetail.module.css";
import Likes from "../Layout/Likes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const RecipeDetail = (props) => {
  // make the url of youtebe embed version
  // find the position of &
  let index_ = props.item.video.indexOf("&");
  // slice everything after &
  let without_ = props.item.video.slice(0, index_);
  // replace watch?v= with embed/
  let embedUrl = without_.replace("watch?v=", "embed/");
  console.log(props.item.likes);
  // dinamicaly change color of difficulty
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

  // handle the like submit
  async function onLikeSubmit(e) {
    const response = await fetch("/api/new-recipe", {
      method: "PUT",
      body: JSON.stringify({
        name: props.item.name,
        vote: +e.target.id || 2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      <div className={styleDetail.steps}>
        <h4>Steps:</h4>
        <ol>
          {props.item.steps.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
      <iframe
        className={styleDetail.video}
        width="90%"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className={styleDetail.rate}>
        <h4>Rate this recipe</h4>
        <div onClick={onLikeSubmit}>
          <FontAwesomeIcon
            id="3"
            icon={faFaceGrinHearts}
            className={styleDetail.smiles}
          />
          <FontAwesomeIcon
            id="2"
            icon={faFaceSmile}
            className={styleDetail.smiles}
          />
          <FontAwesomeIcon
            id="1"
            icon={faFaceFrown}
            className={styleDetail.smiles}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
