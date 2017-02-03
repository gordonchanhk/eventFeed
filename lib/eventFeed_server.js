var io = require('socket.io');
var ioObj;
var domains = [];

exports.listen = function(server){

	console.log('eventFeed_server listen');

	ioObj = io.listen(server);


  ioObj
  	.of('/eventFeed')
  	.on('connection', function(socket) {

	  	console.log('io on connection');

	  	socket.on('connect', function( data ){
		  	if( typeof domains[socket.id] === "undefined" ) {
	  			socket.join( data.domain );
	  			domains[socket.id] = data.domain;
	  		}
	  		console.log("===================");
	  		console.log(domains);
	  		console.log("===================");
	  	};

	  	socket.on('signal', function( data ){

	  		console.log('on signal');

	  		socket.in(data.domain).emit('update', data.action + " : " + data.productId);
	  	});

	  	socket.on('disconnect', function() {
	  		console.log('disconnected: ' + socket.id);
		    delete domains[socket.id];
		  });
  	});


};