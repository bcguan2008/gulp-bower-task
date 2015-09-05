var assert = require('assert');
var should = require('should');

var gBowerTask = require('../Lib/gulp-bower-task');

describe('Test Lib',function(){
	it('Should be a class',function(){
		gBowerTask.should.be.ok;
	});
})