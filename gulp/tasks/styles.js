const gulp         = require("gulp");
const rename       = require('gulp-rename');
const stylus       = require('gulp-stylus');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync').create();
const siteJSON     = require('../../site.json');

// Compile stylus stylesheets to css
gulp.task('stylus', function () {
  return gulp.src(siteJSON.src.css + '/**/*.styl')
    .pipe(stylus())
    .pipe(rename({ extname: '.css' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(siteJSON.build.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Move all *.css (if have some) to docs
gulp.task('css', function () {
  return gulp.src(siteJSON.src.css + '/**/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(siteJSON.build.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('stylus:watch', function () {
  gulp.watch(siteJSON.src.css + '/**/*.styl', ['stylus']);
});
gulp.task('css:watch', function () {
  gulp.watch(siteJSON.src.css + '/**/*.css', ['css']);
});