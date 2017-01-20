var config = require('../config');
var app = require('./server');
var http = require('http').Server(app);

http.listen(config.port,function(){
	console.log('Listening on %d...', config.port);
});