//TEST
//Node JS getStarted
//https://www.w3schools.com/nodejs/nodejs_get_started.asp

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(201, {'Content-Type': 'application/json'});
  res.end('Hello World');
}).listen(8080);
