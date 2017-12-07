const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin    = require('gulp-imagemin');
const jshint      = require('gulp-jshint');

// Hint all of our custom developed Javascript to make sure things are clean
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// If user-developed Javascript is modified, re-run the hinter
gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
});