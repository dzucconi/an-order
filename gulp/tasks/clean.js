var gulp = require('gulp');
var del = require('del');

gulp.task('clean:css', function (done) {
  del([
    'build/*.css'
  ], done);
});

gulp.task('clean:js', function (done) {
  del([
    'build/*.js',
    'build/*.json'
  ], done);
});
