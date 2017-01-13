# MongoDB

#### Terminologia
No MongoDB a terminologia é um pouco diferente, segue abaixo essas diferenças em comparação ao MySQL

MongoDB | MySQL
--------| ------
DATABASE | DATABASE
COLLECTION |TABLE
DOCUMENTE JSON | ROWS
QUERY | QUERY
INDEX | INDEX


#### LEVANTANDO SERVIDOR
> $ sudo mongod

 Lembrar de criar a /data/db e adicionar as permissões necessárias

#### INICIANDO O SHELL DO MONGO
> $ mongo

#### COMANDOS
###### SHOW DBS
Vai mostras as databases disponiveis
> show dbs

###### SHOW COLLECTIONS
Vai mostrar os collections da database
> show collections

###### MONGOEXPORT
Vai exportar os dados de uma collection no MongoDB
> mongoexport --db nome_do_database --collection nome_da_colecao --ou arquivo_de_saida.json

###### MONGOIMPORT
Vai importar os dados de um arquivo para um collection do MongoDB
> mongoimport --db database --collection collection --drop --file data.json
