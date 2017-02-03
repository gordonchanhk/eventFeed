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

	  	socket.on('signal', function( data ){

	  		console.log('on signal');

	  		console.log("data.domain: " + data.domain);
	  		console.log(domains);
	  		console.log("==============");
	  		console.log(domains[socket.id]);

	  		if( typeof domains[socket.id] === "undefined" ) {
	  			socket.join( data.domain );
	  			domains[socket.id] = data.domain;
	  		}

	  		socket.in(data.domain).emit('update', data.action + " : " + data.productId);
	  	});

	  	socket.on('disconnect', function() {
	  		console.log('disconnected: ' + socket.id);
		    delete domains[socket.id];
		  });
  	});


};