const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
  pokemons:  [{type: Schema.Types.ObjectId, ref: 'pokemons'}]
}

const pokemonSchema = new Schema(_schema);

const data = {
  pokemons: ['589f9d583fc1173789636b2b']
};

let Model = mongoose.model('mypokemons', pokemonSchema);
let poke = new Model(data);
poke.save((err, data) => {
  if (err) return console.log("ERROR: " + err);
  console.log("Inseriu: " + data);
});

module.exports = pokemonSchema;
