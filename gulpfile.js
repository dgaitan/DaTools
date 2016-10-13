const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer')
	uglify = require('gulp-uglify')
	concat = require('gulp-concat');
	browser = require('browser-sync').create();

//compile sass
gulp.task('sass', function(){
	return gulp.src('./sass/**/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 versions', 'not ie <= 8', 'Firefox > 20'] }))
		.pipe(gulp.dest('./css'));
});

//minify js
gulp.task('minify', function(){
	return gulp.src('./js-vendors/*.js')
		.pipe(uglify())
		.pipe(concat('datools.js'))
		.pipe(gulp.dest('./js'));
});

//watch sass files
gulp.task('default', function(){
	browser.init({
		server: './'
	});
	gulp.watch('./*html').on('change', browser.reload);
	gulp.watch('./css/*.css').on('change', browser.reload);
	gulp.watch('./js-vendors/*.js', ['minify']);
	gulp.watch('./sass/**/*.scss', ['sass']);
});