var express = require('express');
var app = express();
var router = express.Router();

var controller = require('./controller');

router.get('/',controller.home);

app.set('views', __dirname + '/views');
app.use('/',router);

module.exports = function(parentApp){
	parentApp.use(app);
};