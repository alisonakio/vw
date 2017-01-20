var express = require('express');
var app = express();
var router = express.Router();

var controller = require('./controller');

router.get('/',controller.list);

app.set('views', __dirname + '/views');
app.use('/items',router);

module.exports = function(parentApp){
	parentApp.use(app);
};