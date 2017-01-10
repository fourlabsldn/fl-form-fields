/* eslint-disable quote-props */
// List all available tasks

const src = "src";
const dest = "dist";
const path = require("path");

const organiser = require("gulp-organiser");
organiser.registerAll("./gulp-tasks", {
  "test-headless": {
    src: "./tests/unit/unit.js",
  },
  "transpile-react": {
    main: {
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
    tests: {
      watch: "tests/**/*.js",
      src: "tests/index.js",
      dest,
      rename: "fl-form-fields-tests.js",
      config: {
        external: ["react", "react-dom"],
        format: "iife",
      },
    },
  },
  "browser-sync": {
    src: ".", // it doesn"t matter, it"s just so the task object is not ignored.
    reloadOn: ["transpile-react"], // reload page when these tasks happen
    startPath: "examples/all_fields/index.html",
    baseDir: "./",
  },
});
