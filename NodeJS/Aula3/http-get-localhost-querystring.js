'use strict';

const http = require('http');

http.get({
  hostname: 'localhost',
  path: '/user?name=Igor&teacher=true&age-15',
  port: 3000,
  agent: false
}, (response) => {
  let body = '';
  console.log('STATUS: ' + response.statusCode);
  console.log('HEADERS: ' + response.headers);
  response.on('data', (data) => {
    body += data;
  });
  response.on('end', () => {
    console.log('Resposta: ', body);
  });
});
