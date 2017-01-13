# MongoDB - Aula 01 - Exercício

autor: [Igor Oliveira](https://github.com/devigor)

## Importando a collection de restaurantes

```
➜  ~ mongoimport --db be-mean --collection restaurantes --drop --file restaurantes.json
2016-12-12T13:57:29.731-0200    connected to: localhost
2016-12-12T13:57:29.731-0200    dropping: be-mean.restaurantes
2016-12-12T13:57:31.278-0200    imported 25359 documents
➜  ~
```

## Fazendo a contagem

```
littl3(mongod-3.2.11) be-mean> db.restaurantes.find({}).count()
25359
```
