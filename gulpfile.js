var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./demo/scss/coloriss.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./demo/css/'))
    .pipe(minify({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./demo/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch('./demo/scss/coloriss.scss', ['sass']);
});
