const gulp    = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('tests', function () {
    return gulp.src('src/specs/**.js')
        .pipe(jasmine());
});

gulp.task('tests:watch', function() {
    gulp.watch(['src/specs/**.js', 'src/js/**.js'], ['tests']);
});