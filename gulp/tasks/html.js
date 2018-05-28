const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const pug         = require('gulp-pug');
const rename      = require('gulp-rename');
const data        = require('gulp-data');

// Compile all pug to html
gulp.task('pug', function () {
    return gulp.src('src/pages/**/*.+(html|pug)')
        .pipe(pug({
            // we can send some variables to the pug, i.e. a date of generation of the site (see the function below)            
            data: { 
                currentYear: currentYear(),
                currentDate: currentFullDate(),
                title: "Test"
            }
        }))
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('docs'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Whenever a template is changed, recompile
gulp.task('pug:watch', function () {
    gulp.watch('src/pages/**/*.+(html|pug)', ['pug']);
    gulp.watch('src/includes/**/*.+(html|pug)', ['pug']);
});

// returns the current Date in format DD MONTH YYYY
function currentFullDate() {
    var currentDate = new Date().getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var currentMonth = monthNames[new Date().getMonth()];
    var currentYear = new Date().getFullYear();
    return currentDate + ' ' + currentMonth + ' ' + currentYear;
}

function currentYear() {
    return new Date().getFullYear();
}