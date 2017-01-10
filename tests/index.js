/* eslint-env jasmine */
import allTypes from "../src";
import typeApiTest from "./type-api";
import "./base-types";

describe("Smoke test", () => {
  it("exports the public API", () => {
    expect(Object.keys(allTypes).includes("baseTypes")).toBeTruthy();
    expect(Object.keys(allTypes).includes("customTypes")).toBeTruthy();
    expect(Object.keys(allTypes).includes("compositeTypes")).toBeTruthy();
  });
});

allTypes.baseTypes.map(typeApiTest);
allTypes.customTypes.map(typeApiTest);
allTypes.compositeTypes.map(typeApiTest);
