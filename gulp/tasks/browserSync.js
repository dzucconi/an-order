var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', ['template:development'], function() {
  browserSync.init(['build/**'], {
    server: {
      baseDir: 'build'
    }
  });
});
