const gulp         = require("gulp");
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const reporter     = require('postcss-reporter');
const syntax_scss  = require('postcss-scss');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src(['src/styles/**/*.scss'])

    // PostCSS Tasks before Sass compilation
    .pipe(postcss([reporter({ clearMessages: true, throwError: true })]))

    // Sass Compilation
    .pipe(sass({errLogToConsole: true})) 

    // PostCSS tasks after Sass compilation
    .pipe(postcss([
      autoprefixer({ browsers: ['> 5%', 'last 2 versions', 'ie > 7'] }), // Autoprefixes CSS properties for various browsers
    ], { syntax: syntax_scss }))
    .pipe(gulp.dest('docs/styles'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass-min', function () {
  return gulp.src(['src/styles/**/*.scss'])

    // PostCSS Tasks before Sass compilation
    .pipe(postcss([reporter({ clearMessages: true, throwError: true })]))

    // Sass Compilation
    .pipe(sass({errLogToConsole: true})) 
    .pipe(rename({
      suffix: ".min",
      extname: '.css'
    }))
    .pipe(sourcemaps.init())    

    // PostCSS tasks after Sass compilation
    .pipe(postcss([
      autoprefixer({ browsers: ['> 5%', 'last 2 versions', 'ie > 7'] }), // Autoprefixes CSS properties for various browsers
      cssnano()
    ], { syntax: syntax_scss }))
    .pipe(sourcemaps.write('.'))    
    .pipe(gulp.dest('docs/styles'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/styles/**/*.scss', ['sass']);
});
