const gulp        = require("gulp");
const runSequence = require("run-sequence");

gulp.task('default', function() {
    runSequence(
        'img',
        'js',
        'stylus',
        'css',
        'lib',
        'nunjucks',
        'server',
        'img:watch',
        'lib:watch',
        'js:watch',
        'stylus:watch',
        'nunjucks:watch',
        'css:watch'
    );
});