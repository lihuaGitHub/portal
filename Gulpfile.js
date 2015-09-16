var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function () {

    gulp.src(['app/client/index.js', 'app/client/contact.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('build', ['scripts']);

gulp.task('watch', ['watch']);

gulp.task('watch', function () {
    gulp.watch('app/**/*.*', ['build']);
});
