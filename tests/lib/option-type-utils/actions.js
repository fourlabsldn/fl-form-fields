/* eslint-env jasmine */
import {
  addOption,
  removeOption,
  removeIfOptionIsNull,
  updateOption,
  updateProperty,
} from "../../../src/lib/option-type-utils/actions";

describe("action addOption", () => {
  it("outputs the correct type", () => {
    const { type } = addOption({});
    expect(type).toBe("addOption");
  });

  it("created the correct keys", () => {
    const content = { a: 1, b: 2 };
    const action = addOption(content);
    expect(action.initialState).toBe(content);
  });
});

describe("action removeOption", () => {
  it("outputs the correct type", () => {
    const { type } = removeOption({});
    expect(type).toBe("removeOption");
  });
});

describe("action removeIfOptionIsNull", () => {
  it("outputs the correct type", () => {
    const { type } = removeIfOptionIsNull({});
    expect(type).toBe("removeIfOptionIsNull");
  });

  it("created the correct keys", () => {
    const idx = 2;
    const ev = { target: {} };
    const action = removeIfOptionIsNull(idx, ev);
    expect(action.optionIndex).toBe(idx);
    expect(action.event).toBe(ev);
  });
});

describe("action updateOption", () => {
  it("outputs the correct type", () => {
    const { type } = updateOption({});
    expect(type).toBe("updateOption");
  });

  it("created the correct keys", () => {
    const idx = 2;
    const ev = { target: {} };
    const action = updateOption(idx, ev);
    expect(action.optionIndex).toBe(idx);
    expect(action.event).toBe(ev);
  });
});

describe("action updateProperty", () => {
  it("outputs the correct type", () => {
    const { type } = updateProperty({});
    expect(type).toBe("updateProperty");
  });

  it("created the correct keys", () => {
    const init = {};
    const name = "asdf";
    const ev = { target: {} };
    const action = updateProperty(init, name, ev);
    expect(action.initialState).toBe(init);
    expect(action.propName).toBe(name);
    expect(action.event).toBe(ev);
  });
});
