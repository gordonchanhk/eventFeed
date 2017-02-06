var eventFeedServer = require('../eventFeed_server');

function connectedSocket() {
  var domains = eventFeedServer.connectedSocket(),
  	output = [];
  for ( socketId in domains ) {
  	var str = JSON.stringify( socketId );
  	output.push( socketId + "=" + domains[socketId] );
  }

  return output.join('<br />');
}

function connectedDomain() {
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

	return output.join('<br />');
}

function domainMsgs() {
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

	return output.join('');
}

exports.connectedSocket = connectedSocket;
exports.connectedDomain = connectedDomain;
exports.domainMsgs = domainMsgs;