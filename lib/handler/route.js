var showPage = require("./showPage");

function route(pathname, res) {

	var handle = {}

	// list of routing
	handle["/connectedSocket"] = showPage.connectedSocket;

	if (typeof handle[pathname] === 'function') {
		handle[pathname]();

		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Hello World");

		return true;
	} else {
		return false;
	}
}

exports.route = route;