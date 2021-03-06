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
			var $this = this;

			var bowerFile = gbowerTask(file,options);
			if(bowerFile){
				bowerFile.forEach(function(val,index){
					$this.push(val);
				});
			}
		}

		return cb();
	});
};


