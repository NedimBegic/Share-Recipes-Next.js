import { MongoClient, ObjectId } from "mongodb";
import RecipeDetail from "@/Components/sideComponents/RecipeDetail";

const RecipeDetailes = (props) => {
  return <RecipeDetail item={props.recipeData} />;
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://nedim:nedim123@social.j4binvl.mongodb.net/recipes?retryWrites=true&w=majority"
  );
  const db = client.db();
  // get the collection of the DB
  const recipesCollection = db.collection("recipes");
  const recipes = await recipesCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    // property where we configure if every obj has a path, seting it to false we configure that every path has his value
    // it is pre-rendering some most visited contents and other is rendering on user request from DB dynamicaly
    fallback: false,
    // its a must have array in which we have obj
    paths: recipes.map((recipe) => ({
      // we insert a must have params and obj of meetup id
      params: { recipeId: recipe._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // context param is used for getting url id
  const recipeId = context.params.recipeId;
  const client = await MongoClient.connect(
    "mongodb+srv://nedim:nedim123@social.j4binvl.mongodb.net/recipes?retryWrites=true&w=majority"
  );
  // storing it in variable to use
  const db = client.db();
  // get the collection of the DB
  const recipesCollection = db.collection("recipes");
  // find only one element using meetupId
  const selectedRecipe = await recipesCollection.findOne({
    // we convert our id to obj like in MongoDb
    _id: new ObjectId(recipeId),
  });
  // close the database
  client.close();

  return {
    props: {
      // we send this as props to this component
      recipeData: {
        id: selectedRecipe._id.toString(),
        name: selectedRecipe.name,
        description: selectedRecipe.description,
        type: selectedRecipe.type,
        origin: selectedRecipe.origin,
        difficulty: selectedRecipe.difficulty,
        time: selectedRecipe.time,
        image: selectedRecipe.image,
        steps: selectedRecipe.steps,
        ingredients: selectedRecipe.ingredients,
        quantity: selectedRecipe.quantity,
        video: selectedRecipe.video,
        date: selectedRecipe.date,
        likes: selectedRecipe.likes,
        comments: selectedRecipe.comments,
      },
    },
  };
}
export default RecipeDetailes;
