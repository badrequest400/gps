var mongoose = require('mongoose');

var reportSchema = mongoose.Schema({

	GID: Number,
	timestamp: Number,
	lat: Number,
	lng: Number,
	speed: Number,
	orientation: Number,
	input: String,
	output: String,
	analogue: String,
	mystery: Number
});

module.exports.Report = mongoose.model('Report', reportSchema);
