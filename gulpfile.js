var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("bs", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("watch", ["bs"], function() {
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./assets/**/*.*").on("change", browserSync.reload);
});