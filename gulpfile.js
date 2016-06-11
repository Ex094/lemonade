// requirements
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var prefix       = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var minifyCSS    = require('gulp-minify-css');

// create sass tasks
gulp.task('sass', function () {
    gulp.src('src/lemonade.scss')
        .pipe(sass({outputStyle: 'expanded', includePaths: ['scss']}))
        .pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
        .pipe(gulp.dest('src'))
	.pipe(minifyCSS())
	.pipe(rename({
	            suffix: '.min'
	}))
	.pipe(gulp.dest('src'));
});

// default task (just run gulp)
gulp.task('default', ['sass']);

gulp.task('watch', ['sass', 'browser-sync'], function () {
    gulp.watch("src/lemonade.scss", ['sass']);
});
