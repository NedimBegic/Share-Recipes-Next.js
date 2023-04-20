import React, { useState, useRef, useEffect } from "react";
import styleDetail from "./RecipeDetail.module.css";
import Likes from "../Layout/Likes";
import Up from "./Up";
import ErrorModule from "./ErrorModule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import foodLogo from "../../public/foodLogo.png";
import Image from "next/image";

const RecipeDetail = (props) => {
  /*  +++++++++++ states for component +++++++++++++++++ */
  // state for showing error module
  const [isError, setIsError] = useState(false);
  // content of the error module
  const [contentTxt, setContentText] = useState("");
  // state to change comments
  const [comments, setComments] = useState(props.item.comments);
  // state for voting info
  const [voteDescription, setVoteDescription] = useState("");

  /* ++++++++++ use ref to store inputs */
  const nameRef = useRef();
  const commentRef = useRef();
  const allDiv = useRef();

  // state for scroll to div
  const [upDiv, setUpDiv] = useState(allDiv);

  /*++++++++++++  make the url of video embed */
  let embedUrl;
  console.log(props.item.video);
  if (props.item.video.length < 1) {
    embedUrl = "https://www.youtube.com/embed/tJlzIJaokVY";
    console.log(embedUrl);
  } else {
    // find the position of &
    let index_ = props.item.video.indexOf("&");
    // slice everything after &
    let without_ = props.item.video.slice(0, index_);
    // replace watch?v= with embed/
    embedUrl = without_.replace("watch?v=", "embed/");
  }
  /* +++++++++++++ function for hiding Error Module +++++++*/
  const onHideModuleHandler = () => {
    setIsError(false);
  };

  /* ++++++++++++++div that is scrolled to */
  useEffect(() => {
    setUpDiv(allDiv.current);
  }, []);

  /* +++++++++ change color for dificulty */
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
  /* ++++++++++ handle like submit */
  async function onLikeSubmit(e) {
    setVoteDescription("Loading...");
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
    setVoteDescription("You voted!");
  }

  /*+++++++++ adding a comment */
  async function addCommentHandler(e) {
    e.preventDefault();
    // adding error handling if name input is empty
    if (nameRef.current.value.length < 1) {
      setIsError(true);
      setContentText("Name input empty");
      return;
    }
    if (commentRef.current.value.length < 1) {
      setIsError(true);
      setContentText("Comment input empty");
      return;
    }
    const response = await fetch("/api/new-recipe", {
      method: "PUT",
      body: JSON.stringify({
        name: props.item.name,
        userName: nameRef.current.value,
        comment: commentRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let author = nameRef.current.value;
    let authorComment = commentRef.current.value;
    setComments((prevState) => [
      {
        name: author,
        comment: authorComment,
      },
      ...prevState,
    ]);
    e.target.reset();
  }

  const handleScroll = () => {
    upDiv.scrollIntoView({ behavior: "smooth" });
  };

  /* +++++++++++++++++ THE COMPONENT RENDER ++++++++++++++++++ */
  return (
    <div ref={allDiv} className={styleDetail.all}>
      {isError && (
        <ErrorModule content={contentTxt} hideModule={onHideModuleHandler} />
      )}
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
            {props.item.ingredients.length > 1 ? (
              props.item.ingredients.map((item) => (
                <li key={Math.random() * 100}>{item}</li>
              ))
            ) : (
              <p className={styleDetail.noIngredients}>Secret ingredients</p>
            )}
          </div>
        </div>
      </div>
      <div className={styleDetail.steps}>
        <h4>Steps:</h4>
        <ol>
          {props.item.steps.length > 0 && props.item.steps[0].length > 2 ? (
            props.item.steps.map((item, i) => <li key={i}>{item}</li>)
          ) : (
            <p className={styleDetail.noSteps}>
              {" "}
              No description given! Adopt, improvise, overcome!!!{" "}
            </p>
          )}
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
        <span>{voteDescription}</span>
      </div>
      <div className={styleDetail.comments}>
        <h4>Comments</h4>
        <form onSubmit={addCommentHandler}>
          <input
            ref={nameRef}
            type="name"
            name="name"
            placeholder="your name"
          />
          <textarea
            ref={commentRef}
            rows="20"
            cols="10"
            placeholder="your comment"
          ></textarea>
          <button type="submit">Add comment</button>
        </form>
      </div>
      {comments.length > 0 ? (
        <div className={styleDetail.commentList}>
          <ul>
            {comments.reverse().map((item, i) => (
              <li key={i}>
                <h5>{item.name}</h5>
                <p>" {item.comment} "</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No comments</p>
      )}
      <Up onClick={handleScroll} />
      <Image src={foodLogo} className={styleDetail.foodLogo} alt="food logo" />
    </div>
  );
};

export default RecipeDetail;
