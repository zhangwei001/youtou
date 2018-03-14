/**
 * gulp插件引入
 * */
var gulp = require('gulp'); //gulp工具
var zip = require('gulp-zip');


//打zip包
gulp.task('zip', function() {
    return gulp.src('../dist/**/*.*')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('../zip'));
});


