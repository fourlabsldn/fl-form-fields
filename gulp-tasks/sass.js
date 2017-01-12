// yarn add --dev gulp-sass gulp-postcss autoprefixer gulp-sourcemaps gulp-organiser

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const organiser = require('gulp-organiser');
const rename = require('gulp-rename');


module.exports = organiser.register((task) => {
  gulp.task(task.name, () => {
    gulp.src(task.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ['last 15 versions'] })]))
    .pipe(sourcemaps.write('.'))
    .pipe(rename('fl-interactive-form.css'))
    .pipe(gulp.dest(task.dest));
  });
});
