var gulp = require('gulp');
var rev = require('gulp-rev');
var del = require('del');
var files = ['./build/app.css', './build/app.js'];

gulp.task('rev', ['browserify', 'stylus'], function() {
  return gulp.src(files)
    .pipe(rev())
    .pipe(gulp.dest('build'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('build'));
});

gulp.task('rev:clean', ['rev'], function (done) {
  del([
    'build/*.js',
    'build/*.css',
    '!build/app-*'
  ], done);
});
