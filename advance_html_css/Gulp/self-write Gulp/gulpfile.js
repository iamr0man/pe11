const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('styles', function(){
  return gulp
        .src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('brsyc', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  gulp.watch("src/scss/**/*.scss", gulp.series('styles'));
  gulp.watch("*.html*").on('change', browserSync.reload);

});

