var config = require('../config');
var app = require('./server');

app.listen(config.port,function(){
	console.log('Listening on %d...', config.port);
});