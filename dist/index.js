(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.flFormFields = global.flFormFields || {})));
}(this, (function (exports) { 'use strict';

// import baseTypes from './base-types';
// import compositeTypes from './composite-types';
// import customTypes from './custom-types';


const baseTypes = "";
const compositeTypes = "";
const customTypes = "";

const all = Object.assign({}, baseTypes, customTypes, compositeTypes);

exports['default'] = all;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
