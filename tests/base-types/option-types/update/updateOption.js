/* eslint-env jasmine */
import updateOption from "../../../../src/base-types/option-types/update";

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

  it("is curried", () => {
    const completeInvocation = updateOption(mockState, 0, mockEvent);
    const curriedInvocation = updateOption(mockState)(0)(mockEvent);
    expect(completeInvocation.prop1).toBe(curriedInvocation.prop1);
    expect(completeInvocation.prop2).toBe(curriedInvocation.prop2);
    expect(completeInvocation.options.length).toBe(curriedInvocation.options.length);
  });

  it("changes the option at the correct index", () => {
    const newState = updateOption(mockState, 0, mockEvent);
    expect(newState.options[0]).toBe(mockEvent.target.value);
  });

  it("does not change other options", () => {
    const newState = updateOption(mockState, 0, mockEvent);
    expect(newState.options[1]).toBe(mockState.options[1]);
    expect(newState.options[2]).toBe(mockState.options[1]);
  });

  it("does not change other properties of state", () => {
    const newState = updateOption(mockState, 0, mockEvent);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });
});
