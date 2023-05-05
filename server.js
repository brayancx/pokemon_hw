require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const { connect, connection } = require("mongoose");

//connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to mongo");
});

// View Engine 
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("The Middleware is running");
  next();
});

// Index
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
    console.log("Index is running")

  try {
    const foundPokemon = await Pokemon.find({});
    res.render("Index", { pokemon: foundPokemon });
  } catch (err) {
    res.render(400).send(err);
  }
 
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Create
app.post("/pokemon", async (req, res) => {
  try {
    req.body.img = `http://img.pokemondb.net/artwork/${req.body.name}`;
    const newPokemon = await Pokemon.create(req.body);
    res.redirect("/pokemon");

  } catch (err) {

    res.render(400).send(err);
  }
});
// app.post("/pokemon", async (req, res) => {
//     try {
//       const newPokemon = await Pokemon.create(req.body);
//       res.redirect("/pokemon");
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });


app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", { pokemons: foundPokemon });

  } catch (err) {

    res.render(400).send(err);
  }
});
// app.get("/pokemon/:id", async (req, res) => {
//     try {
//       const foundPokemon = await Pokemon.findById(req.params.id);
//       res.render("Show", { pokemonObj: foundPokemon });
//     } catch (err) {
//       res.status(400).send(err);
//     }
//   });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
