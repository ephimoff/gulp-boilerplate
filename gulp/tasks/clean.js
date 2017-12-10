const gulp      = require("gulp");
const removeDir = require("../lib/remove-dir");

gulp.task("clean", function () {
    return removeDir("./docs");
});
