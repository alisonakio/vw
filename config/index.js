var config = {};

config.port = process.env.PORT || 3000;

config.db = process.env.MONGO_URI || 'mongodb://localhost/vw';
//'mongodb://xxxx:xxxxx@ds117919.mlab.com:17919/vw'

module.exports = config;