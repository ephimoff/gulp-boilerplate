var gulp = require("gulp"),
    runSequence = require("run-sequence");

    
gulp.task('default', function() {
    runSequence(
        'copy',
        'stylus',
        'server',
        'copy:watch',
        'stylus:watch'
    );
});