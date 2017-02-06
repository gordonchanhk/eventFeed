var io = require('socket.io');
var ioObj;
var domains = [];

exports.listen = function(server){

	ioObj = io.listen(server);


  ioObj
  	.of('/eventFeed')
  	.on('connection', function(socket) {

  		console.log('Connected');

	  	socket.on('join', function( data ){
		  	if( typeof domains[socket.id] === "undefined" ) {
	  			socket.join( data.domain );
	  			domains[socket.id] = data.domain;
	  		}
	  	});

	  	socket.on('signal', function( data ){
	  		console.log(domains[socket.id] + ": " + data.action + ": " + data.productId);
	  		socket.in(data.domain).emit('update', data.action + " : " + data.productId);
	  	});

	  	socket.on('disconnect', function() {
	  		console.log('Disconnected');
		    delete domains[socket.id];
		  });
  	});


};

exports.connectedSocket = function(){
	return domains;
};