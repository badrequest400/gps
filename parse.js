

module.exports.parse = function(report, callback) {

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
