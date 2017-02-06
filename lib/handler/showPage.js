var eventFeedServer = require('../eventFeed_server');

function connectedSocket(res) {
  var domains = eventFeedServer.connectedSocket(),
  	output = [];
  for ( socketId in domains ) {
  	var str = JSON.stringify( socketId );
  	output.push( socketId + "=" + domains[socketId] );
  }

  res.render('showPage', { body: output.join('<br />') });
}

function connectedDomain(res) {
	var domains = eventFeedServer.connectedSocket(),
		domainCount = [],
		output = [];

	for ( socketId in domains ) {

		if( typeof domainCount[ domains[ socketId ] ] === "undefined" ) {

			domainCount[ domains[ socketId ] ] = 1;

		} else {

			domainCount[ domains[ socketId ] ]++;

		}

	}

	for ( domain in domainCount ) {
		output.push( domain + ": " + domainCount[ domain ] );
	}

	res.render('showPage', { body: output.join('<br />') });
}

function domainMsgs(res) {
	var domainMsgs = eventFeedServer.getDomainMsgs(),
		output = [];

	output.push("<ul>");
	for ( domain in domainMsgs ) {
		output.push("<li>");

		output.push(domain);

		output.push("<ol>");

		for ( msg in domainMsgs[domain] ) {

			output.push("<li>" + domainMsgs[domain][msg] + "</li>");

		}

		output.push("</ol>");

		output.push("</li>");
	}
	output.push("</ul>");

	res.render('showPage', { body: output });
}

exports.connectedSocket = connectedSocket;
exports.connectedDomain = connectedDomain;
exports.domainMsgs = domainMsgs;