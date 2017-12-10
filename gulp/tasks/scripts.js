const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const jshint      = require('gulp-jshint');
const uglify      = require('gulp-uglify');
const sourcemaps  = require('gulp-sourcemaps');
const concat      = require('gulp-concat');

// Hint all of our custom developed Javascript to make sure things are clean
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// If user-developed Javascript is modified, re-run the hinter
gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
});