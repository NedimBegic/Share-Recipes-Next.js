// form for adding user data, sending then to the parent component

import styleNewRecipe from "../sideComponents/NewRecipe.module.css";
import { useState, useRef } from "react";

// component for adding ingredients
const Ingredient = (props) => {
  return (
    <div className={styleNewRecipe.ingredients}>
      <h4>{props.numIngredient || 1}</h4>
      <input
        className="ingredient"
        type="text"
        name=""
        placeholder="Ingredient name"
      />
      <select className="quantity" name="quantity">
        <option value="quantity">quantity</option>
        <option value="gram">gram</option>
        <option value="litre">litre</option>
      </select>
    </div>
  );
};
// component for adding procedure steps inputs
const ProcedureSteps = (props) => {
  return (
    <div className={styleNewRecipe.steps}>
      <h4>{props.numStep || 1}</h4>
      <textarea
        rows="8"
        cols="38"
        className="textDesc"
        placeholder="Procedure step"
      ></textarea>
    </div>
  );
};

const NewRecipe = (props) => {
  // refs for user input
  const nameRef = useRef();
  const descriptionRef = useRef();
  const typeRef = useRef();
  const originRef = useRef();
  const difficultyRef = useRef();
  const prepRefH = useRef();
  const prepRefM = useRef();
  const imgRef = useRef();
  const videoRef = useRef();

  // for ingredient list
  const [ingredientsList, setIngredientsList] = useState([
    <Ingredient key={0} />,
  ]);
  const [ingredientValues, setIngredientValues] = useState([]);
  const [quantityValues, setQuantityValues] = useState([]);
  // for steps list
  const [steps, setSteps] = useState([<ProcedureSteps key={0} />]);
  const [stepsValues, setStepsValues] = useState([]);

  // add new ingredient input
  const addIngredient = () => {
    setIngredientsList((prevState) => [
      ...prevState,
      <Ingredient
        numIngredient={ingredientsList.length + 1}
        key={ingredientsList.length}
      />,
    ]);
  };

  // add new step
  const addStep = () => {
    setSteps((prevState) => [
      ...prevState,
      <ProcedureSteps numStep={steps.length + 1} key={steps.length} />,
    ]);
  };

  const onSubmitFrom = (e) => {
    e.preventDefault();

    // ..............for ingredients
    let ingredientInputs = document.querySelectorAll(".ingredient");
    let quantityInputs = document.querySelectorAll(".quantity");
    // obj to hold values
    let ing = [];
    let quan = [];
    for (let i = 0; i < ingredientInputs.length; i++) {
      let ingVal = ingredientInputs[i].value;
      let quanVal = quantityInputs[i].value;
      ing.push(ingVal);
      quan.push(quanVal);
    }
    setIngredientValues(ing);
    setQuantityValues(quan);

    //--------------for steps
    let stepsInputs = document.querySelectorAll(".textDesc");
    let stepsValues = [];
    // loop for steps
    for (let i = 0; i < stepsInputs.length; i++) {
      let value = stepsInputs[i].value;
      stepsValues.push(value);
    }
    setStepsValues(stepsValues);
    // ----------- make a date for this post
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    // -----------saving data to an obj
    let formInfo = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      type: typeRef.current.value,
      origin: originRef.current.value,
      difficulty: difficultyRef.current.value,
      time: prepRefH.current.value + ":" + prepRefM.current.value,
      image: imgRef.current.value,
      video: videoRef.current.value,
      steps: stepsValues,
      ingredients: ing,
      quantity: quan,
      date: currentDate,
      likes: [],
      comments: [],
    };
    props.giveData(formInfo);
  };
  return (
    <div className={styleNewRecipe.all}>
      <h1>Add a Recipe</h1>
      <form onSubmit={onSubmitFrom}>
        <input
          ref={nameRef}
          className={styleNewRecipe.title}
          type="text"
          name="Recipe Title"
          placeholder="Recipe Title"
        />
        <h2>Short description</h2>
        <textarea
          ref={descriptionRef}
          rows="9"
          cols="39"
          placeholder="Write a short description of your recipe"
        ></textarea>
        <div className={styleNewRecipe.info}>
          <div>
            <label htmlFor="type">Type</label>
            <select ref={typeRef} name="type">
              <option value="soups">Soups</option>
              <option value="salads">Salads</option>
              <option value="dinner">Dinner</option>
              <option value="cakes">Cakes</option>
              <option value="burger">Burger</option>
            </select>
          </div>
          <div>
            <label htmlFor="origin">Origin</label>
            <select ref={originRef} name="origin">
              <option value="balkan">Balkan</option>
              <option value="asian">Asian</option>
              <option value="american">American</option>
              <option value="european">European</option>
              <option value="africa">African</option>
            </select>
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty</label>
            <select ref={difficultyRef} name="difficulty">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <h2>Preparation</h2>
        <div className={styleNewRecipe.preparation}>
          <div>
            <select ref={prepRefH} name="hours">
              <option value="0">0 hours</option>
              <option value="1">1 hours</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5 hours</option>
            </select>
            <select ref={prepRefM} name="minutes">
              <option value="10">10 minutes</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
              <option value="40">40 minutes</option>
              <option value="50">50 minutes</option>
            </select>
          </div>
        </div>
        <h2>Ingredients</h2>
        {ingredientsList}
        <button
          className={styleNewRecipe.button}
          type="button"
          onClick={addIngredient}
        >
          Add more
        </button>
        <h2>Procedure steps</h2>
        {steps}
        <button
          onClick={addStep}
          className={styleNewRecipe.button}
          type="button"
        >
          Add more
        </button>
        <h2>Insert media</h2>
        <p>Upload image</p>
        <div className={styleNewRecipe.media}>
          <input
            ref={imgRef}
            className={styleNewRecipe.mediaPic}
            type="text"
            name="picMedia"
            placeholder="Insert Image"
          />
          <input
            ref={videoRef}
            type="text"
            name="videoMedia"
            placeholder="Insert video url"
          />
        </div>
        <button className={styleNewRecipe.submit} type="submit">
          Submit recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
