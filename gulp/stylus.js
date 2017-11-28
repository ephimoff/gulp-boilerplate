var gulp         = require("gulp"),
    rename       = require('gulp-rename'),
    stylus       = require('gulp-stylus'),
    cfg          = require('../package.json').config,
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

// Compile stylus stylesheets to css
gulp.task('stylus', function () {
  return gulp.src(cfg.src.stylus + '/**/*.styl')
    .pipe(stylus())
    .pipe(rename({ extname: '.css' }))
    .pipe(postcss([autoprefixer()]))
    // .pipe(gulp.dest('docs'));
    .pipe(gulp.dest(cfg.build.css));
});

gulp.task('stylus:watch', function(){
    gulp.watch(cfg.src.stylus + '/**/*.*',['stylus']);
});