import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@social.j4binvl.mongodb.net/recipes?retryWrites=true&w=majority`
    );
    const db = client.db();
    // get the collection of the DB
    const recipesCollection = db.collection("recipes");
    // call insertOne to add one new document
    const resoult = await recipesCollection.insertOne(data);
    // to close the DB when we are done
    client.close();

    // now we have to make a response
    // 201 insert succesfully than add a json() to prepare json data to be added to respons and a message
    // res.status(201).json( {message: 'Recipe inserted'})
    res.status(201).json({ message: "Recipe insterted" });
  }
  if (req.method === "PUT") {
    if (req.body.name && req.body.vote) {
      let itemName = req.body.name;
      let vote = req.body.vote;
      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@social.j4binvl.mongodb.net/recipes?retryWrites=true&w=majority`
      );
      const db = client.db();
      // get the collection of the DB
      const recipesCollection = db.collection("recipes");
      const recipeForUpdate = await recipesCollection.updateOne(
        { name: itemName },
        { $push: { likes: vote } }
      );
      client.close();
      res.status(201).json({ message: "User voted" });
    }

    if (req.body.userName && req.body.comment) {
      let itemName = req.body.name;
      const client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@social.j4binvl.mongodb.net/recipes?retryWrites=true&w=majority`
      );
      const db = client.db();
      // get the collection of the DB
      const recipesCollection = db.collection("recipes");
      const recipeForUpdate = await recipesCollection.updateOne(
        { name: itemName },
        {
          $push: {
            comments: { name: req.body.userName, comment: req.body.comment },
          },
        }
      );
      client.close();
      res.status(201).json({ message: "User voted" });
    }
  }
}

export default handler;
