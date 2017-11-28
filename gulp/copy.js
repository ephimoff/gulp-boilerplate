var gulp = require("gulp");
    
gulp.task('copy', function() {
    gulp.src(['src/img/**/*', 'src/js/**/*', 'src/*.html',])
    // gulp.src('src/**/*')
        .pipe(gulp.dest('docs/'));
});

gulp.task('copy:watch', function(){
    gulp.watch('src/**/*',['copy']);
});