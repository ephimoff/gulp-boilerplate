// const gulp        = require('gulp');
// const browserSync = require('browser-sync').create();
// const jshint      = require('gulp-jshint');
// const uglify      = require('gulp-uglify');
// const sourcemaps  = require('gulp-sourcemaps');
// const concat      = require('gulp-concat');

// // Hint all of our custom developed Javascript to make sure things are clean
// gulp.task('js', function () {
//     return gulp.src('src/js/**/*.js')
//         .pipe(jshint())
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(sourcemaps.write('.'))
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('docs/js'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });

// // If user-developed Javascript is modified, re-run the hinter
// gulp.task('js:watch', function () {
//     gulp.watch('src/js/**/*.js', ['js']);
// });

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const jshint      = require('gulp-jshint');
const uglify      = require('gulp-uglifyes');
const sourcemaps  = require('gulp-sourcemaps');
const concat      = require('gulp-concat');
const log         = require('fancy-log');
const colors      = require('ansi-colors');
const rename      = require('gulp-rename'); 

gulp.task('js:watch', function () {
    gulp.watch('src/js/**/*.js', ['js', 'minjs']);
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('common.js'))
        .pipe(jshint())
        .on('error', function (err) { log(colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// minify js
gulp.task('minjs', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('common.js'))
        .pipe(jshint())
        .pipe(sourcemaps.init())
        .pipe(uglify({
            mangle: false,
            ecma: 6
        }))
        .on('error', function (err) { log(colors.red('[Error]'), err.toString()); })
        .pipe(rename(function (path) {
            path.extname = '.min.js';
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('docs/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

