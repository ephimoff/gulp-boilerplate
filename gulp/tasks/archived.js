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

const gulp        = require('gulp');
// const markdown    = require('gulp-markdown');
// const tap         = require('gulp-tap');
// const Handlebars  = require('Handlebars');
// const rename      = require('gulp-rename');
// const _           = require('underscore');
// const path        = require('path');
// const frontMatter = require('front-matter');
// const siteJSON    = require('../../site.json');

// let Data = {
//   "pages": []
// };

// gulp.task('generate_pages', function () {
//   Data.pages=[]; // null ou the object for live reload
//   // read the template from page.hbs
//   return gulp.src('src/content/templates/page.hbs')
//   .pipe(tap(function(file) {
//     // file is page.hbs so generate template from file
//     const template = Handlebars.compile(file.contents.toString());

//     // now read all the pages from the pages directory
//     return gulp.src('src/content/pages/**.md')
//       .pipe(tap(function(file) {
//         // use path library to get file name
//         let name = path.basename(file.path, ".md");
//         // read meta data content using front-matter
//         const content = frontMatter(file.contents.toString());
//         let pageYAML = content.attributes;
//         const pageBody = content.body;
//         // add name to meta data for lookup
//         pageYAML.name = name;
//         // add url to our meta data
//         pageYAML.url = "/pages/" + file.relative.replace(".md", ".html");

//         // save meta data into object outside stream
//         Data.pages.push(pageYAML);
//         // replace file contents without meta data
//         file.contents = new Buffer(pageBody, "utf-8");
//       }))
//       // convert from markdown
//       .pipe(markdown())
//       .pipe(tap(function(file) {
//         let name = path.basename(file.path, ".html");
//         // file is the converted HTML from the markdown
//         // set the contents to the contents property on data
//         let data = _.findWhere(Data.pages, { name: name });
//         data.contents = file.contents.toString();
//         // we will pass data to the Handlebars template to create the actual HTML to use
//         let html = template(data);
//         // replace the file contents with the new HTML created from the Handlebars template + data object that contains the HTML made from the markdown conversion
//         file.contents = new Buffer(html, "utf-8");
//       }))
//       .pipe(gulp.dest('docs/pages'));
      
//   }));
// });

// gulp.task('homepage', ['generate_pages'], function() {
//   return gulp.src("src/content/pages/index.hbs")
//     .pipe(tap(function(file, t) {
//       let template = Handlebars.compile(file.contents.toString());
//       let html = template({ 
//         title: siteJSON.title + " | " + siteJSON.description,
//         pages: Data.pages
//       });
//       file.contents = new Buffer(html, "utf-8");
//     }))
//     .pipe(rename({ extname: '.html' }))
//     .pipe(gulp.dest("docs"));
// });

// // Whenever a template is changed, recompile
// gulp.task('homepage:watch', function () {
//   gulp.watch('src/content/pages/*.+(html|md|hbs)', ['homepage']);
//   gulp.watch('src/content/templates/**/*.+(html|hbs)', ['homepage']);
// });