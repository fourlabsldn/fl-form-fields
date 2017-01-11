// Watch all tasks in gulpfile
const gulp = require('gulp');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task, allTasks) => {
  gulp.task(task.name, () => {
    allTasks.forEach(t => {
      const watchTargets = t.tasks
        .map(aTask => aTask.watch || aTask.src)
        .reduce((acc, files) => acc.concat(files), []);

      gulp.watch(watchTargets, [t.name]);
    });
  });
});
