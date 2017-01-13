/* eslint-env jasmine */
import {
  addOption,
  removeOption,
  removeIfOptionIsNull,
  updateOption,
  toggleRequired,
  updateTitle,
  setNewOptionCaption,
} from "../../../src/js/lib/option-type-utils/actions";

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

describe("action toggleRequired", () => {
  it("outputs the correct type", () => {
    const { type } = toggleRequired(false);
    expect(type).toBe("toggleRequired");
  });

  it("created the correct keys", () => {
    const action1 = toggleRequired(false);
    expect(action1.required).toBe(false);

    const action2 = toggleRequired(true);
    expect(action2.required).toBe(true);
  });
});

describe("action updateTitle", () => {
  it("outputs the correct type", () => {
    const { type } = updateTitle({}, "atitle");
    expect(type).toBe("updateTitle");
  });

  it("creates the correct keys", () => {
    const mockInitialState = () => null;
    const mockEvent = "mockEvent";
    const action = updateTitle(mockInitialState, mockEvent);
    expect(action.initialState).toBe(mockInitialState);
    expect(action.event).toBe(mockEvent);
  });

  it("is curried", () => {
    const mockInitialState = () => null;
    const mockEvent = "mockEvent";
    const action = updateTitle(mockInitialState)(mockEvent);
    expect(action.initialState).toBe(mockInitialState);
    expect(action.event).toBe(mockEvent);
  });
});

describe("action setNewOptionCaption", () => {
  it("outputs the correct type", () => {
    const { type } = setNewOptionCaption({}, "atitle");
    expect(type).toBe("setNewOptionCaption");
  });

  it("creates the correct keys", () => {
    const mockEvent = "mockEvent";
    const action = setNewOptionCaption(mockEvent);
    expect(action.event).toBe(mockEvent);
  });
});
