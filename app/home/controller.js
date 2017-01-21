var model = require('./model');

exports.home = function list(req,res,next){
	res.status(200).render('home/home');
}

