var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('compress', ['template:production'], function() {
  gulp.src('build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});
