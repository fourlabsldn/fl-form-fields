/* eslint-env jasmine */
import update from "../../../../js/lib/option-type-utils/update";
import { updateProperty } from "../../../../js/lib/option-type-utils/actions";

describe("option-type update.updateProperty", () => {
  const mockInitialState = () =>
    ({
      prop1: "prop 1",
      prop2: "prop 2",
      prop3: "prop 3",
    });

  const mockState = {
    prop1: "changed 1",
    prop2: "changed 2",
    prop3: "changed 3",
  };

  const mockEvent = {
    target: {
      value: "a value",
    },
  };

  it("changes the correct property", () => {
    const action = updateProperty(mockInitialState, "prop1", mockEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockEvent.target.value);
  });

  it("does not change other properties", () => {
    const action = updateProperty(mockInitialState, "prop3", mockEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });

  it("defaults to the property value in initialState if `value` is empty", () => {
    const mockEmptyEvent = { target: { value: undefined } };
    const action = updateProperty(mockInitialState, "prop1", mockEmptyEvent);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockInitialState().prop1);
  });

  it("does not throw when event doesn't have a target key", () => {
    const mockNullEvent = { };
    const action = updateProperty(mockInitialState, "prop1", mockNullEvent);
    expect(
      () => update(mockState, action)
    ).not.toThrow();
  });
});
