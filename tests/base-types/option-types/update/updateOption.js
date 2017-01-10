/* eslint-env jasmine */
import update from "../../../../src/base-types/option-types/update";
import { updateOption } from "../../../../src/base-types/option-types/actions";

describe("option-type update.updateOption", () => {
  const mockEvent = {
    target: {
      value: "eventValue",
    },
  };

  const mockState = {
    prop1: "prop1",
    prop2: "prop2",
    options: [
      { caption: "default caption1" },
      { caption: "default caption2" },
      { caption: "default caption3" },
    ],
  };

  it("changes the option at the correct index", () => {
    const action = updateOption(0, mockEvent);
    const newState = update(mockState, action);
    console.log(newState);
    expect(newState.options[0].caption).toBe(mockEvent.target.value);
  });

  it("does not change other options", () => {
    const action = updateOption(0, mockEvent);
    const newState = update(mockState, action);
    expect(newState.options[1].caption).toBe(mockState.options[1].caption);
    expect(newState.options[2].caption).toBe(mockState.options[2].caption);
  });

  it("does not change other properties of state", () => {
    const action = updateOption(0, mockEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });
});
