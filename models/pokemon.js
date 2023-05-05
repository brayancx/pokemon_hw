// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.jpg/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.jpg/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.jpg/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.jpg/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.jpg/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.jpg/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.jpg/artwork/wartortle"}
//  ];


 const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true}
})

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;