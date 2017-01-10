/* eslint-env jasmine */
import allTypes from "../src";

describe("Smoke test", () => {
  it("exports the public API", () => {
    expect(Object.keys(allTypes).includes("baseTypes")).toBeTruthy();
    expect(Object.keys(allTypes).includes("customTypes")).toBeTruthy();
    expect(Object.keys(allTypes).includes("compositeTypes")).toBeTruthy();
  });
});
