var gulp = require('gulp');
var gbowerTask = require('./index.js');

gulp.task('default',function(){


	gulp.src('./bower.json')
		.pipe(gbowerTask());
})