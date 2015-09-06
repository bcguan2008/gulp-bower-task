# gulp-bower-task

gulp bower 插件，方便自动执行bower，并文件copy 到指定目录。

## How?

1.	调用bower.commands.install来执行安装bower
2.  提供文件夹路径修改，制定到自己希望的目录

## Installation:

```shell
npm install gulp-bower-task --save
```

## Sample:
```javascript
var gulp = require('gulp');
var gbowerTask = require('gulp-bower-task');

gulp.task('default',function(){
	gulp.src('./bower.json')
		.pipe(gbowerTask())
		.pipe(gulp.dest('./output/'));
})
```
