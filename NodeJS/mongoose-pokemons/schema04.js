const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name:  Number
}

const pokemonSchema = new Schema(_schema);
const data = {name: 1/2}

let Model = mongoose.model('pokemons', pokemonSchema);
let poke = new Model(data);
poke.save((err, data) => {
  if (err) return console.log("ERROR: " + err);
  console.log("Inseriu: " + data);
});

module.exports = pokemonSchema;
