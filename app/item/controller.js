var Model = require('./model');

exports.list = function list(req,res,next){
	Model.find({}, function(err, items) {
	  if (err) throw err;
	  res.status(200).send(items);
	});
}

exports.select = function select(req,res,next){
	
};

exports.new = function newItem(req,res,next){
	res.render('item/new');
};

exports.create = function create(req,res,next){
	var item_name = req.body.name || '';
	var description = req.body.description || '';
	var item = Model({
		name: item_name,
		description: description,
		created_at: Date.now(),
		updated_at: Date.now()
	});
	item.save(function(err) {
		if (err){
			console.log(err);
			res.status(500).end();
		}
		console.log('item created!');
		res.status(200).redirect('/items/');
	});
};

exports.update = function update(req,res,next){
	
};

exports.delete = function deleteItem(req,res,next){
	
};