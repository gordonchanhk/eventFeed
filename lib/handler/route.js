var showPage = require("./showPage");

function route(pathname, res) {
	var handle = {}

	// list of routing
	handle["/connectedSocket"] = showPage.connectedSocket;
	handle["/connectedDomain"] = showPage.connectedDomain;
	handle["/domainMsgs"] = showPage.domainMsgs;

	if (typeof handle[ pathname ] === 'function') {
		var output = handle[ pathname ]();

		res.writeHead(200, {"Content-Type": "text/html"});
		res.end( output );

		return true;
	} else {
		return false;
	}
}

exports.route = route;