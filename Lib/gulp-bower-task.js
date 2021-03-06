var bower = require('bower');
var gutil= require('gulp-util');
var path = require('path');
var fs = require('fs');
var glob = require('glob');

var BOWER_JSON_FILES= 'bower_components/**/.bower.json';

var bowerTask  = function(file,options){
	if(!file) {return ;}
	if(!file.isBuffer()){return ;}

	var fileList = [];

	var baseDirName = path.dirname(file.path);
	var bowerJSONFiles = path.join(baseDirName,BOWER_JSON_FILES);

	var install = function(){
		bower.commands.install().
			on('error',function(msg){
				console.error(msg);
				throw msg;
			});
	};

	install();	

	var files = glob.sync(bowerJSONFiles, {});
	if(files && files.length){
		for(var i =0; i<files.length;i++){
			var bowerJSON = JSON.parse(fs.readFileSync(files[i]));
			var bowerDirName = path.dirname(files[i]);

			var fileName = bowerJSON.main;
			var filePath = path.join(baseDirName, fileName);
			var realFilePath = path.join(bowerDirName,fileName);

			fileList.push(new gutil.File({
				path:filePath,
				contents:fs.readFileSync(realFilePath)
			}))
		}
	}

	return fileList;
};

module.exports = bowerTask;
