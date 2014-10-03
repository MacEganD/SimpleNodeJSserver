var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

app.get('/hello.txt', function(req, res){
	res.send('Hello World from ExpressJS (via Azure)');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});