const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  name: String,
  age: Number
}
const pokemonSchema = new Schema(_schema);
const data = {name: {teste: 1}, age: 'Bazinga'};

let Model = mongoose.model('mypokemons', pokemonSchema);
let poke = new Model(data);
poke.save((err, data) => {
  if (err) return console.log("ERROR: " + err);
  console.log("Inseriu: " + data);
});

module.exports = pokemonSchema;
