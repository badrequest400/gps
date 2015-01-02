var net = require('net');
var mongoose = require('mongoose');

var models  = require('./models.js');
var configDB = require('./config/database.js');




var server = net.createServer(function(conn) {

	conn.on('data', function(data) {

		parse(data.toString(), function(list) {

			console.log(list);

			var newReport = new models.Log();

			newReport.GID = list[1];
			newReport.time = list[2];
			newReport.lat = list[4];
			newReport.lon = list[6];
			newReport.speed = list[8];
			newReport.orientation = list[9];
			newReport.date = list[10];		// needs to be changed to real Date
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
}



function parse(report, callback) { 

	var commaSplit = report.split(",");
	var slashSplit = [];
	var split = [];

	for (var i=0; i<commaSplit.length; i++) {
		if (commaSplit[i].search('/') >= 0){
			slashSplit = commaSplit[i].split('/');

			for (var j=0; j<slashSplit.length; j++){
				split.push(slashSplit[j]);
			};

		}else{
			split.push(commaSplit[i]);
		};
	};
	
	callback(split);
};