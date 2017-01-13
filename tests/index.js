/* eslint-env jasmine */
import "babel-polyfill";
import allTypes from "../src/js/";

describe("Smoke test", () => {
  it("exports the public API", () => {
    expect(Array.isArray(allTypes)).toBeTruthy();
    expect(allTypes.length > 5).toBeTruthy();
  });
});

import typeApiTest from "./type-api";
allTypes.forEach(typeApiTest);

import "./lib";
import "./types/Dropdown";
