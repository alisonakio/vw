var config = require('../config');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//load features routes
require('./home')(app);
require('./item')(app);

//error route
app.use(function (err, req, res, next) {
	console.log(err);
	res.json({ "error": "route not found 500" });
});

//route not found treatment
app.all('*', function(req, res){	
	res.json({ "error": "route not found 404" });
});

module.exports = app;