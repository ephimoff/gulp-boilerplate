const gulp = require('gulp');

// Copy everything from lib and plugins to docs
gulp.task('lib', function () {
    return gulp.src('src/lib/**/*')
        .pipe(gulp.dest('docs/lib'));
});

// If there are some changes copy them to the docs folder
gulp.task('lib:watch', function () {
    gulp.watch('src/lib/**/*', ['lib']);
});