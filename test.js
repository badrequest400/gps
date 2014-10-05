var net = require('net');


var server = net.createServer(function(conn) {

	conn.on('data', function(data) {
		console.log(data.toString());
	});
});

server.listen(8502, function() {
	console.log('Server listening on 8502');
});