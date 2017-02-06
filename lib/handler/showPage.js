var eventFeedServer = require('..//eventFeed_server');

function connectedSocket() {
  var domains = eventFeedServer.connectedSocket();
  console.log("~~~~~~~~~~~~~~~~~~~");
  console.log(domains);
  console.log("~~~~~~~~~~~~~~~~~~~");
}

exports.connectedSocket = connectedSocket;