/* eslint-disable max-len */
// npm install --save-dev gulp-sass gulp-postcss autoprefixer gulp-sourcemaps gulp-organiser gulp-rename

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const organiser = require('gulp-organiser');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');

module.exports = organiser.register((task) => {
  gulp.task(task.name, () => {
    gulp.src(task.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: ['last 15 versions'] })]))
    .pipe(gulpIf(!!task.rename, rename(task.rename)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(task.dest));
  });
});
