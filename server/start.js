const server = require('http').createServer();

// route requests through express app
server.on('request', require('../app'));

// turn on server
server.listen((process.env.PORT || 3001), function () {
	console.log('Server is listening on port 3001');
});