var net = require('net');
var mongoose = require('mongoose');

var models  = require('./models.js');
var configDB = require('./config/database.js');
var date = require('./date.js');
var parse = require('./parse.js');




var server = net.createServer(function(conn) {

	conn.on('data', function(data) {

		parse.parse(data.toString(), function(list) {

			console.log(list);

			var newReport = new models.Report();

			newReport.GID = list[1];
			newReport.timestamp = date.parseDate(list[10], list[2]);
			newReport.lat = list[4];
			newReport.lng = list[6];
			newReport.speed = list[8];
			newReport.orientation = list[9];
			newReport.input = list[14];
			newReport.output = list[15];
			newReport.analogue = list[16];
			newReport.mystery = list[17];

			newReport.save(function(err) {
				if (err) console.log(err);
			});

		});
	});
});

server.listen(8502, function() {
	console.log('Server listening on 8502');

	mongooseConnect();

	mongoose.connection.on('disconnected', function() {
		mongooseConnect();
	});
});


function mongooseConnect() {

	mongoose.connect('mongodb://' + configDB.host + ':' + configDB.port + '/' + configDB.database, function(err) {
		if (err) console.log(err);
	});
};
