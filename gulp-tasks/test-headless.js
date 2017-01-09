const gulp = require('gulp');
const organiser = require('gulp-organiser');
const jasmine = require('gulp-jasmine-phantom');

module.exports = organiser.register((task) => {
  gulp.task(task.name, () => {
    gulp.src(task.src)
    .pipe(jasmine({
      includeStackTrace: true,
      integration: true,
    }));
  });
});
