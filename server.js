var express = require('express');
var app = express();

var port = process.env.PORT || 1337;
//var port = 8080;
app.get('/express.txt', function(req, res){
	res.send('Hello World from ExpressJS (via Azure)');
});

app.get('/', function(req, res){
	res.send('Hello World from ExpressJS (via Azure)');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});