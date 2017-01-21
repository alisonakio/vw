var Model = require('./model');

exports.list = function list(req,res,next){
	Model.find({}, function(err, items) {
	  if (err) throw err;
	  console.log(items);
	  res.status(200).send(items);
	});
}

exports.select = function select(req,res,next){
	
};

exports.new = function newItem(req,res,next){
	res.render('item/new');
};

exports.create = function create(req,res,next){
	
};

exports.update = function update(req,res,next){
	
};

exports.delete = function deleteItem(req,res,next){
	
};