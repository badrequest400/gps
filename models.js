var mongoose = require('mongoose');

var logSchema = mongoose.Schema({

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

module.exports.Log = mongoose.model('Log', logSchema);
