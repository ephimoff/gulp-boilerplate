const gulp        = require("gulp");
const runSequence = require("run-sequence");

// gulp.task('default', function() {
//     runSequence(
//         'clean',
//         'img',
//         'js',
//         'stylus',
//         'css',
//         'lib',
//         'homepage',
//         'server',
//         'img:watch',
//         'lib:watch',
//         'js:watch',
//         'stylus:watch',
//         'homepage:watch',
//         'css:watch'
//     );
// });



gulp.task('default', function() {
    runSequence(
        'clean',
        'assets',   // Copy all assets (bootstrap, font-awesome etc.) to docs
        'img',      // Compress and minify images to reduce their file size
        'minjs',    // js hint, merging two js together and uglyfy them
        'sass',     // transforming sass to css
        'sass-min', // minimising css
        'pug'       // transforming pug to html
    );
});

gulp.task('dev', function() {
    runSequence(
        'clean',    // cleaning the previously created files
        'assets',   // Copy all assets (bootstrap, font-awesome etc.) to docs
        'img',      // optimising and minimising images
        'js',       // js hint and merging two js together and 
        'minjs',    // js hint, merging two js together and uglyfy them
        'sass',     // transforming stylus to css
        'sass-min', // minimising css
        'pug',      // transforming pug to html
        'server',   // starting browserSync server
        'assets:watch',
        'pug:watch',
        'img:watch',
        'js:watch',
        'sass:watch'
    );
});