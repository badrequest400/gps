var mongoose = require('mongoose');

var logSchema = mongoose.Schema({

	GID: Number,
	time: Number,
	lat: Number,
	lon: Number,
	speed: Number,
	orientation: Number,
	date: Number,		//needs to be changed to real Date
	input: String,
	output: String,
	analogue: String,
	mystery: Number
});

module.exports.Log = mongoose.model('Log', logSchema);