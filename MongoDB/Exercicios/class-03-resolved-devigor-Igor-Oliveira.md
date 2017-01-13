# MongoDB - Aula 03 - Exercício

autor: [Igor Oliveira](https://github.com/devigor)

### 1. Liste todos Pokemons com a altura menor que 0.5
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {heigth: {$lt: 0.5}}
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find(query)
{
  "_id": ObjectId("585036af1470a87b4faaef8d"),
  "name": "Igor",
  "description": "Pokemon anão",
  "type": "anão",
  "attack": 100,
  "heigth": 0.3
}
Fetched 1 record(s) in 1ms
```

### 2. Liste todos Pokemons com a altura maior ou igual que 0.5
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {heigth: {$gte: 0.5}}
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find(query)
{
  "_id": ObjectId("585035331470a87b4faaef8c"),
  "name": "Webschool",
  "description": "É pokemon que tem a capacidade criar cursos fodas",
  "type": "raro",
  "attack": 8000,
  "heigth": 0.7
}
{
  "_id": ObjectId("585036e11470a87b4faaef8e"),
  "name": "Suissa",
  "description": "Pokemon mestre professor",
  "type": "raro",
  "attack": 200,
  "heigth": 1
}
{
  "_id": ObjectId("585036f61470a87b4faaef8f"),
  "name": "MongoDB",
  "description": "Pokemon capaz de armazenar dados gigantes",
  "type": "nosql",
  "attack": 8000,
  "heigth": 0.5
}
{
  "_id": ObjectId("585037161470a87b4faaef90"),
  "name": "MEAN",
  "description": "Pokemon capaz de fazer altas coisas com apenas uma tecnologia",
  "type": "tech",
  "attack": 1000000000000000,
  "heigth": 0.5
}
Fetched 4 record(s) in 2ms
```

### 3.Liste todos Pokemons com a altura menor ou igual que 0.5 E do tipo grama
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {$and: [{type: "grama"}, {heigth: {$lte: 0.5}}]}
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find(query)
Fetched 0 record(s) in 1ms
```

### 4. Liste todos Pokemons com o name `Pikachu` OU com attack menor ou igual que 0.5
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {name: "Pikachu", $or:[{attack: {$lte: 0.5}}]}
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find(query)
Fetched 0 record(s) in 0ms
```

### 5. Liste todos Pokemons com o attack MAIOR OU IGUAL QUE 48 E com  height menor ou igual que 0.5
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {attack:{$gte: 48}, $and:[{heigth: {$lte: 0.5}}]}
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find(query)
{
  "_id": ObjectId("585036af1470a87b4faaef8d"),
  "name": "Igor",
  "description": "Pokemon anão",
  "type": "anão",
  "attack": 100,
  "heigth": 0.3
}
{
  "_id": ObjectId("585036f61470a87b4faaef8f"),
  "name": "MongoDB",
  "description": "Pokemon capaz de armazenar dados gigantes",
  "type": "nosql",
  "attack": 8000,
  "heigth": 0.5
}
{
  "_id": ObjectId("585037161470a87b4faaef90"),
  "name": "MEAN",
  "description": "Pokemon capaz de fazer altas coisas com apenas uma tecnologia",
  "type": "tech",
  "attack": 1000000000000000,
  "heigth": 0.5
}
Fetched 3 record(s) in 2ms
```
