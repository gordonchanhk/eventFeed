var io = require('socket.io'),
	ioObj,
	domains = [],
	domainMsgs = [];

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
	  		var signalMsg = data.action + ": " + data.productId;
	  		console.log(domains[socket.id] + ": " + signalMsg);

	  		if( typeof domainMsgs[ domains[socket.id] ] === "undefined" ) {
	  			// init array
	  			domainMsgs[ domains[socket.id] ] = [];
	  		}

	  		domainMsgs[ domains[socket.id] ].push(signalMsg);

	  		// key the msg log no longer than 10 elements
	  		if ( domainMsgs[ domains[socket.id] ].length > 10 ) {
	  			domainMsgs[ domains[socket.id] ].shift();
	  		}

	  		socket.in(data.domain).emit('update', signalMsg);
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

exports.getDomainMsgs = function(){
	return domainMsgs;
};