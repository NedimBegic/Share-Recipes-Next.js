// component used to get data from DB and pass it into child
import { MongoClient } from "mongodb";
import RecipesList from "@/Components/sideComponents/RecipesList";

const Recipes = (props) => {
  return <RecipesList recipes={props.recipes} />;
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.DB_MONGO);
  const db = client.db();
  // get the collection of the DB
  const recipesCollection = db.collection("recipes");
  const recipes = await recipesCollection.find().toArray();
  client.close();

  return {
    // it must have a props property, which will go to our HomePage component
    // so we don't need useState or useEffect for this cause we get data throught props
    props: {
      // we can map to change the id
      recipes: recipes.map((recipe) => ({
        name: recipe.name,
        description: recipe.description,
        type: recipe.type,
        origin: recipe.origin,
        difficulty: recipe.difficulty,
        time: recipe.time,
        image: recipe.image,
        steps: recipe.steps,
        ingredients: recipe.ingredients,
        quantity: recipe.quantity,
        date: recipe.date,
        likes: recipe.likes,
        comments: recipe.comments,
        // convert the _id from MongoDB to a string to be used
        id: recipe._id.toString(),
      })),
    },
    // proprety for for increment static generation
    // put a number to re-evaluate the data in seconds
    // we use it when the date is changed more frequently
    revalidate: 5,
  };
}
export default Recipes;
