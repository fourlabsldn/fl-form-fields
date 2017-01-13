/* eslint-env jasmine */
import update from "../../../../src/js/lib/option-type-utils/update";
import { setNewOptionCaption } from "../../../../src/js/lib/option-type-utils/actions";

describe("option-type update.setNewOptionCaption", () => {
  const mockState = {
    prop1: "changed 1",
    prop2: "changed 2",
    newOptionCaption: "a newOptionCaption",
  };

  const mockEvent = {
    target: {
      value: "a value",
    },
  };

  it("changes the correct property", () => {
    const action = setNewOptionCaption(mockEvent);
    const newState = update(mockState, action);
    expect(newState.newOptionCaption).toBe(mockEvent.target.value);
  });

  it("does not change other properties", () => {
    const action = setNewOptionCaption(mockEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });

  it("defaults to empty string if `value` is undefined", () => {
    const mockEmptyEvent = { target: { value: undefined } };
    const action = setNewOptionCaption(mockEmptyEvent);
    const newState = update(mockState, action);
    expect(newState.newOptionCaption).toBe("");
  });

  it("does not throw when event doesn't have a target key", () => {
    const mockNullEvent = { };
    const action = setNewOptionCaption(mockNullEvent);
    expect(
      () => update(mockState, action)
    ).not.toThrow();
  });
});
