var http = require('http');
var url = require("url");
var router = require("./lib/handler/route");

var cache = {};
var port = process.env.PORT || 8000;
var serveStatic = require('./lib/serveStaticFnc');

require('./lib/serveStaticFnc');

function onRequest(req, res) {
	var filePath = false;
	var pathname = url.parse(req.url).pathname;

	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}
	var absPath = './' + filePath;
	if ( ! router.route(pathname, res) ) {
		console.log('serve static');
		serveStatic.serveStatic(res, cache, absPath);
	}
}

var server = http.createServer(onRequest);


server.listen(port, function() {
	console.log('Server listening on port ' + port);
});

var eventFeedServer = require('./lib/eventFeed_server');
eventFeedServer.listen(server);
