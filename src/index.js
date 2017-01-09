import baseTypes from './base-types';
import compositeTypes from './composite-types';
import customTypes from './custom-types';

const all = Object.assign(
  {},
  baseTypes,
  customTypes,
  compositeTypes,
);

export default all;
