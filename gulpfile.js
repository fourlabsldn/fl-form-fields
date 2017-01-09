/* eslint-disable quote-props */
// List all available tasks

const src = 'src';
const dest = 'dist';
const path = require('path');

const organiser = require('gulp-organiser');
organiser.registerAll('./gulp-tasks', {
  'test-headless': {
    src: './tests/unit/unit.js',
  },
});
