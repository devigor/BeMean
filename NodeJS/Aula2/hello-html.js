const   http   = require('http')
      , fs     = require('fs')
      , html  = fs.readFileSync('index.html');

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.write("<h1>Aula 1 do curso de NodeJs - Webschool.io</h1>");
  res.end();
}).listen(3000, () => {
    console.log("Servido rodando em https://localhost:3000");
});
