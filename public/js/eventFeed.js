var EventFeed = function(socket) {
  this.socket = socket;
};

EventFeed.prototype.join = function(  ) {
  var data = {
    domain: document.domain
  };
  this.socket.emit('join', data);
};

EventFeed.prototype.sendSignal = function( action, productId ) {
  var data = {
  	domain: document.domain,
    productId: productId,
    action: action
  };
  this.socket.emit('signal', data);
};


// ===============================

$(document).ready( function() {
  var socket = io.connect("%endpoint%");
  var eventFeedApp = new EventFeed(socket);

  socket.on('update', function( data ) {
    console.log('Received signal');
    console.log( data );
  });

  socket.on('connect', function () { 
    eventFeedApp.join();
  });

  $('#btn').on("click", function() {

  	var productId = $("#txt").val();
  	var action = $("#sel").val();

  	if( action !== "" ) {
  		eventFeedApp.sendSignal( action, productId );
  	}

  });
});
