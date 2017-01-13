/* eslint-disable quote-props */
// List all available tasks
const src = "src";
const dest = "dist";
const path = require("path");

const organiser = require("gulp-organiser");
organiser.registerAll("./gulp-tasks", {
  "test-headless": {
    src: "./dist/fl-form-fields-tests.js",
  },
  "transpile-react": {
    "main": {
      watch: path.join(src, "/**/*.js"),
      src: path.join(src, "index.js"),
      dest,
      rename: "fl-form-fields.js",
      config: {
        external: ["react", "react-dom"],
        format: "umd",
        moduleName: "flFormFields",
      },
    },
    "tests": {
      watch: [path.join(src, "/**/*.js"), "tests/**/*.js"],
      src: "tests/index.js",
      dest,
      rename: "fl-form-fields-tests.js",
      config: {
        // external: ["react", "react-dom"],
        format: "umd",
      },
    },
  },
  "browser-sync": {
    src: ".", // it doesn"t matter, it"s just so the task object is not ignored.
    reloadOn: ["transpile-react"], // reload page when these tasks happen
    startPath: "examples/bare-fields/index.html",
    baseDir: "./",
  },
  "watch": {
    src: ".",
    taskNames: ["transpile-react:tests", "transpile-react:main"],
  },
});
