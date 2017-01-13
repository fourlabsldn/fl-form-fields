/* eslint-env jasmine */
import update from "../../../../src/js/lib/option-type-utils/update";
import { updateTitle } from "../../../../src/js/lib/option-type-utils/actions";

describe("option-type update.updateTitle", () => {
  const mockInitialState = () =>
    ({
      prop1: "prop 1",
      prop2: "prop 2",
      title: "initial title",
    });

  const mockState = {
    prop1: "changed 1",
    prop2: "changed 2",
    title: "a title",
  };

  const mockEvent = {
    target: {
      value: "a value",
    },
  };

  it("changes the correct property", () => {
    const action = updateTitle(mockInitialState, mockEvent);
    const newState = update(mockState, action);
    expect(newState.title).toBe(mockEvent.target.value);
  });

  it("does not change other properties", () => {
    const action = updateTitle(mockInitialState, mockEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });

  it("defaults to the property value in initialState if `value` is empty", () => {
    const mockEmptyEvent = { target: { value: undefined } };
    const action = updateTitle(mockInitialState, mockEmptyEvent);
    const newState = update(mockState, action);
    expect(newState.title).toBe(mockInitialState().title);
  });

  it("does not throw when event doesn't have a target key", () => {
    const mockNullEvent = { };
    const action = updateTitle(mockInitialState, mockNullEvent);
    expect(
      () => update(mockState, action)
    ).not.toThrow();
  });
});
