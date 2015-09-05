'use strict';
var through = require('through2');
var gutil=require('gulp-util');
var PluginError = gutil.PluginError;
var gbowerTask = require('./Lib/gulp-bower-task');
var PLUGIN_NAME = 'gulp-bower-task';


module.exports = function (options) {

	// returning the file stream
	return through.obj(function(file, enc, cb) {

		if (file.isBuffer()) {

			/*var buffer = new Buffer('');

			for(var i = 0, length = packlst.length ; i< length ; i++ ){
				buffer = Buffer.concat([buffer ,packlst[i].buffer]);
			}

			file.contents = Buffer.concat([buffer, file.contents]);
			this.push(file);*/
			var bowerFile = gbowerTask(file,options);
			this.push(bowerFile);
		}



		return cb();
	});
};

