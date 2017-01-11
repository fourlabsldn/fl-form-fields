//
//
// Select which tasks to watch
//
//
const gulp = require("gulp");
const organiser = require("gulp-organiser");

const shallowTask = aTask =>
  Object.assign({}, aTask,
    {
      watch: aTask.tasks
        .map(t => t.watch || t.src)
        .reduce((acc, v) => acc.concat(v), []),
    });

module.exports = organiser.register((task, allTasksConfig) => {
  const { taskNames } = task; // config. Tasks to be watched
  const allTasks = allTasksConfig
      .map(t =>
        t.tasks.length > 1
          ? t.tasks.concat(shallowTask(t))
          : t.tasks
      )
      .reduce((acc, ts) => acc.concat(ts), []);

  const toWatch = allTasks.filter(t => taskNames.includes(t.name));

  gulp.task(task.name, () => {
    toWatch.forEach(t => {
      console.log(`watching ${t.name}`);
      gulp.watch(t.watch || t.src, [t.name]);
    });
  });
});
