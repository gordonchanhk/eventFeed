// Modules
var http = require('http');
var url = require("url");
var router = require("./lib/handler/route");
var express = require('express');
var exphbs  = require('express-handlebars');
var showPage = require("./lib/handler/showPage");


// variables
var cache = {};
var port = process.env.PORT || 8000;



// subsections
var serveStatic = require('./lib/serveStaticFnc');



// App setup
var app = express();
app.engine('.hbs', exphbs({
		defaultLayout: 'main',
		extname: '.hbs'
	})
);
app.set('view engine','.hbs');
var server = require('http').createServer(app);




// function onRequest(req, res) {
// 	var filePath = false;
// 	var pathname = url.parse(req.url).pathname;

// 	if (req.url == '/') {
// 		filePath = 'public/index.html';
// 	} else {
// 		filePath = 'public' + req.url;
// 	}
// 	var absPath = './' + filePath;
// 	if ( ! router.route(pathname, res) ) {
// 		serveStatic.serveStatic(res, cache, absPath);
// 	}
// }

// var server = http.createServer(onRequest);


// server.listen(port, function() {
// 	console.log('Server listening on port ' + port);
// });



// Routing
app.get('/', function (req, res) {
	res.render('index');
});
app.get('/connectedSocket', function (req, res) {
	//res.render('index');
	showPage.connectedSocket(res);
});
app.get('/connectedDomain', function (req, res) {
	//res.render('index');
	showPage.connectedSocket(res);
});
app.get('/domainMsgs', function (req, res) {
	//res.render('index');
	showPage.connectedSocket(res);
});



// Server start
app.listen(8000);



// Socket IO start
var eventFeedServer = require('./lib/eventFeed_server');
eventFeedServer.listen(server);
