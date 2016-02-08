var http = require('http');
var express = require('express');
var logs = require('morgan');

var app = express();

const PORT = process.env.PORT || 8083;

app.use(logs('dev'));
app.use(express.static(__dirname + '/demo'));

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/demo/index.html');
});

http.createServer(app).listen(PORT);
console.log("Coloriss demo started on port " + PORT);
