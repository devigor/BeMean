const  http = require('http')
      , url = require('url');

http.createServer((request, response) => {

  let result = url.parse(request.url, true);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<html><body>');
  response.write('<h1>Query string</h1>');
  response.write('<ul>');

  for(let key in result.query){
    response.write('<li>'+key+' : '+result.query[key]+'</li>');
  }

  response.write('</ul>');
  response.write('</body></html>');
  response.end();
}).listen(3000, () => {
  console.log('Servidor rodando');
});
