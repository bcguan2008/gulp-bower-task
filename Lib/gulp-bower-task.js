var bower = require('bower');
var gutil= require('gulp-util');

var bowerTask  = function(file,options){
	console.log(file.path);
	
	var fileContents =  file.contents.toString();
	var bowerJSON = JSON.parse(fileContents);
	console.log(bowerJSON);

	var install = function(){
		bower.commands.install().
			on('error',function(msg){
				console.error(msg);
				throw ex;
			});
	};

	install();	

	return new gutil.File({
		path:'',
		contents:''
	});
}

module.exports = bowerTask;