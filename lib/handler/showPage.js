var eventFeedServer = require('../eventFeed_server');

function connectedSocket() {
  var domains = eventFeedServer.connectedSocket(),
  	output = [];
  for ( domain in domains ) {
  	var str = JSON.stringify( domain );
  	output.push( domain + "=" + domains[domain] );
  }

  return output.join('<br />');
}

exports.connectedSocket = connectedSocket;