var assert = require('assert');
var should = require('should');
var gutil = require('gulp-util');
var fs = require('fs');

var gBowerTask = require('../Lib/gulp-bower-task.js');

describe('Test Lib',function(){
	it('Should be a class',function(){
		gBowerTask.should.be.ok;
	});

	it('Should pipe out right files',function(){
		var bowerFile = new gutil.File({
			path:'./Tests/input/bower.json',
			contents:fs.readFileSync('./Tests/input/bower.json')
		});

		var files = new gBowerTask(bowerFile);

		files.should.be.ok;
		files.should.have.lengthOf(2);
	})
})