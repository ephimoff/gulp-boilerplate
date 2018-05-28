const gulp = require('gulp');

// Copy all assets (bootstrap, font-awesome etc.) to docs

const vendors = {
    bootstrap: {
        src: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
        ],
        dest: 'docs/vendors/bootstrap'
    },
    fontawesome: {
        src: 'src/lib/fontawesome/*',
        dest: 'docs/vendors/fontawesome',
    },
    jquery: {
        src: 'node_modules/jquery/dist/jquery.min.js',
        dest: 'docs/vendors/jquery'
    }
};

gulp.task('assets', function () {
    gulp.src(vendors.bootstrap.src)
        .pipe(gulp.dest(vendors.bootstrap.dest));
    gulp.src(vendors.fontawesome.src)
        .pipe(gulp.dest(vendors.fontawesome.dest));
    gulp.src(vendors.jquery.src)
        .pipe(gulp.dest(vendors.jquery.dest));

});

// If there are some changes copy them to the docs folder
gulp.task('assets:watch', function () {
    gulp.watch(vendors.bootstrap.src, ['assets']);
    gulp.watch(vendors.fontawesome.src, ['assets']);
    gulp.watch(vendors.jquery.src, ['assets']);
});