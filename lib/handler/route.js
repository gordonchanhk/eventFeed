var showPage = require("./showPage");

function route(pathname, res) {
	var handle = {}

	// list of routing
	handle["/connectedSocket"] = showPage.connectedSocket;
	handle["/connectedDomain"] = showPage.connectedDomain;
	handle["/domainMsgs"] = showPage.domainMsgs;

	if (typeof handle[ pathname ] === 'function') {
		handle[ pathname ](res);
		return true;
	} else {
		return false;
	}
}

exports.route = route;