const gulp        = require("gulp");
const runSequence = require("run-sequence");

gulp.task('default', function() {
    runSequence(
        'clean',
        'img',
        'js',
        'stylus',
        'css',
        'lib',
        'homepage',
        'server',
        'img:watch',
        'lib:watch',
        'js:watch',
        'stylus:watch',
        'homepage:watch',
        'css:watch'
    );
});