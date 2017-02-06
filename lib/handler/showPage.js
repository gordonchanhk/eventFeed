var eventFeedServer = require('../eventFeed_server');

function connectedSocket() {
  var domains = eventFeedServer.connectedSocket(),
  	output = [];
  	console.log("~~~~~~~~~");
  	console.log(domains);
  	console.log("~~~~~~~~~");
  for ( domain in domains ) {
  	console.log("- " + domain);
  	var str = JSON.stringify( domain );
  	output.push( domain + "=" + domains[domain] );
  }

  return output.join('<br />');
}

exports.connectedSocket = connectedSocket;