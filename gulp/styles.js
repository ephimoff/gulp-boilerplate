const gulp         = require("gulp");
const rename       = require('gulp-rename');
const stylus       = require('gulp-stylus');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync').create();
const cfg          = require('../package.json').config;

// Compile stylus stylesheets to css
gulp.task('stylus', function () {
  return gulp.src(cfg.src.css + '/**/*.styl')
    .pipe(stylus())
    .pipe(rename({ extname: '.css' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(cfg.build.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Move all *.css (if have some) to docs
gulp.task('css', function () {
  return gulp.src(cfg.src.stylus + '/**/*.css')
    .pipe(gulp.dest(cfg.build.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('stylus:watch', function () {
  gulp.watch(cfg.src.css + '/**/*.styl', ['stylus']);
});
gulp.task('css:watch', function () {
  gulp.watch(cfg.src.css + '/**/*.css', ['css']);
});