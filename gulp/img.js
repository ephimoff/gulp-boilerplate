const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin    = require('gulp-imagemin');

// Compress and minify images to reduce their file size
gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('docs/lib/img'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// If an image is modified, run the images task to compress images
gulp.task('img:watch', function () {
    gulp.watch('src/img/*', ['img']);
});