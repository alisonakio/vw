var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vw');

var Schema = mongoose.Schema;

// create a schema
var itemSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;