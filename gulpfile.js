var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");

gulp.task('styles', function () {
     gulp.src('sass/**/*.scss')
	     .pipe(sass().on('error', sass.logError))
	     .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('process-scripts', function() {
    return gulp.src('app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/app'));
});

//watch task
gulp.task('default', function () {
	gulp.watch('sass/**/*.scss',['styles']);
});