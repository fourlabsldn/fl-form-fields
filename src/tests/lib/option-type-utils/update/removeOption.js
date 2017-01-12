/* eslint-env jasmine */
import update from "../../../../js/lib/option-type-utils/update";
import { removeOption } from "../../../../js/lib/option-type-utils/actions";

describe("option-type update.removeOption", () => {
  const mockState = {
    prop1: "prop1",
    prop2: "prop2",
    options: [
      { caption: "default caption1" },
      { caption: "default caption2" },
      { caption: "default caption3" },
    ],
  };

  it("removes only the last option", () => {
    const action = removeOption();
    const newState = update(mockState, action);
    expect(newState.options.length).toBe(mockState.options.length - 1);
    expect(newState.options[0]).toBe(mockState.options[0]);
    expect(newState.options[1]).toBe(mockState.options[1]);
  });

  it("doesn't throw if there are no options", () => {
    const mockNoOptionsState = Object.assign({}, mockState, {
      options: [],
    });

    const action = removeOption();
    expect(
      () => update(mockNoOptionsState, action)
    ).not.toThrow();

    expect(update(mockNoOptionsState, action).options.length).toBe(0);
  });

  it("doesn't change other state properties", () => {
    const action = removeOption();
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });
});
