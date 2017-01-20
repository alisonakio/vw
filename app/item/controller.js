var model = require('./model');

exports.list = function list(req,res,next){
	res.status(200).render('list');
}

