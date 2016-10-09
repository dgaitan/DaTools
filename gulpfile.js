const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

//compile sass
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'not ie <= 8', 'Firefox > 20'] }))
		.pipe(gulp.dest('./css'));
});

//watch sass files
gulp.task('default', function(){
	gulp.watch('./sass/**/*.scss', ['sass']);
});