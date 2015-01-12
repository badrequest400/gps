

module.exports.parseDate = function(date, time) {

	// parse date
	var day = Math.round(date / 10000);
	var month = Math.round( (date - (day * 10000)) / 100 ) - 1; // JS starts dates from 0 f$*%!#
	var year = 2000 + (date % 100);

	// parse time
	var hour = Math.round(time / 10000);
	var minute = Math.round( (time - (hour * 10000)) / 100 );
	var sec = time % 100;

	return new Date(year, month, day, hour, minute, sec);
};
