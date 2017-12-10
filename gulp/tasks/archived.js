// const gulp           = require('gulp');
// const browserSync    = require('browser-sync').create();
// const imagemin       = require('gulp-imagemin');
// // const nunjucksRender = require('gulp-nunjucks-render');
// const rename         = require('gulp-rename');
// const data           = require('gulp-data');
// const nunjucksMd     = require('gulp-nunjucks-md');

// // Compile all nunjucks to html
// gulp.task('nunjucks', function () {
//     return gulp.src('src/pages/**/*.+(html|nunjucks|njk|md)')
//         // Adding data to Nunjucks
//         // allow nunjucks pages to see the content of the site.json and use it as varibales i.e. {{author}}
//         .pipe(data(function () {
//             return require('../../site.json'); 
//         }))
//         .pipe(nunjucksMd({
//             path: ['src/templates'],
//             // we can send some variables to the nunjucks, i.e. a date of generation of the site (see the function below)
//             data: { currentDate: currentFullDate() }
//         }))
//         .pipe(gulp.dest('docs'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });

// // Whenever a template is changed, recompile
// gulp.task('nunjucks:watch', function () {
//     gulp.watch('src/pages/*.+(html|nunjucks)', ['nunjucks']);
//     gulp.watch('src/templates/**/*.+(html|nunjucks)', ['nunjucks']);
// });

// // returns the current Date in format DD MONTH YYYY
// function currentFullDate() {
//     var currentDate = new Date().getDate();
//     var monthNames = ["January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
//     var currentMonth = monthNames[new Date().getMonth()];
//     var currentYear = new Date().getFullYear();
//     return currentDate + ' ' + currentMonth + ' ' + currentYear;
//   }