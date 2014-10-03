var http = require('http');
var port1 = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port1);

var express = require('express');
var app = express();

var port2 = process.env.PORT || 1338;
app.get('/hello.txt', function(req, res){
	res.send('Hello World from ExpressJS (via Azure)');
});

var server = app.listen(port2, function() {
    console.log('Listening on port %d', server.address().port2);
});