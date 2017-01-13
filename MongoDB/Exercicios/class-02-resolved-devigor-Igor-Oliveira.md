# MongoDB - Aula 02 - Exercício

autor: [Igor Oliveira](https://github.com/devigor)

### 1. Crie uma database chamada be-mean-pokemons
```
littl3(mongod-3.2.11) be-mean> use be-mean-pokemon
switched to db be-mean-pokemon
```

### 2. Liste quais databases você possui nesse servidor
```
littl3(mongod-3.2.11) be-mean-pokemon> show dbs
be-mean           → 0.005GB
be-mean-instagram → 0.000GB
local             → 0.000GB
nodejs            → 0.000GB
test              → 0.000GB
```

### 3. Liste quais coleções você possui nessa database
```
littl3(mongod-3.2.11) be-mean-pokemon> show collections
littl3(mongod-3.2.11) be-mean-pokemon>
```

### 4. Insira pelo menos 5 pokemons A SUA ESCOLHA
```
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.insert({name:'Webschool',description:'É pokemon que tem a capacidade criar cursos fodas',type:'raro',attack: 8000,heigth: 0.7})

littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.insert({name:'Igor',description:'Pokemon anão',type:'anão',attack:100,heigth:0.3})

littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.insert({name:'Suissa',description:'Pokemon mestre professor',type:'raro',attack:200,heigth:1.0})

littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.insert({name:'MongoDB',description:'Pokemon capaz de armazenar dados gigantes',type:'nosql',attack:8000,heigth:0.5})

littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.insert({name:'MEAN',description:'Pokemon capaz de fazer altas coisas com apenas uma tecnologia',type:'tech',attack:1000000000000000,heigth:0.5})

```

### 5. Liste os pokemons existentes na sua coleção
```
littl3(mongod-3.2.11) be-mean-pokemon> db.pokemons.find()
{
  "_id": ObjectId("585035331470a87b4faaef8c"),
  "name": "Webschool",
  "description": "É pokemon que tem a capacidade criar cursos fodas",
  "type": "raro",
  "attack": 8000,
  "heigth": 0.7
}
{
  "_id": ObjectId("585036af1470a87b4faaef8d"),
  "name": "Igor",
  "description": "Pokemon anão",
  "type": "anão",
  "attack": 100,
  "heigth": 0.3
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
Fetched 5 record(s) in 3ms
```

### 6. Busque o pokemons a sua escolha, pelo nome, e armazene-o em uma variável chamada `poke`
```
littl3(mongod-3.2.11) be-mean-pokemon> var query = {name: "MEAN"}
littl3(mongod-3.2.11) be-mean-pokemon> var poke = db.pokemons.findOne(query)
littl3(mongod-3.2.11) be-mean-pokemon> poke.name
MEAN
```

### 7. Modifique sua `description` e salvê-o
```
littl3(mongod-3.2.11) be-mean-pokemon> poke.description = "Pokemon Full-Stack JS"
Pokemon Full-Stack JS
```
