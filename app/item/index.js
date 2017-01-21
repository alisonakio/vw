var express = require('express');
var app = express();
var router = express.Router();

var controller = require('./controller');

router.use(function timeLog(req, res, next) {
	//console.log('Path: ', req);
	console.log('Time: ', Date.now());
	next();
});

router.get('/',controller.list);
router.get('/new',controller.new);
router.get('/:id',controller.select);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);

app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/../views');
app.use('/items',router);

module.exports = function(parentApp){
	parentApp.use(app);
};