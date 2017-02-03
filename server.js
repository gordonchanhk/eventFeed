var http = require('http');

var cache = {};
var port = process.env.PORT || 8000;
var serveStatic = require('./lib/serveStaticFnc');

require('./lib/serveStaticFnc');

var server = http.createServer(function(req, res) {
	var filePath = false;
	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}
	var absPath = './' + filePath;
	serveStatic.serveStatic(res, cache, absPath);
});


server.listen(port, function() {
	console.log('Server listening on port ' + port);
});

var eventFeedServer = require('./lib/eventFeed_server');
eventFeedServer.listen(server);
