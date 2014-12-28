var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/stylesheets/**', ['stylus']);
  gulp.watch('src/html/**', ['template:development']);
});
