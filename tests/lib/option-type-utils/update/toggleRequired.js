/* eslint-env jasmine */
import update from "../../../../src/js/lib/option-type-utils/update";
import { toggleRequired } from "../../../../src/js/lib/option-type-utils/actions";

describe("option-type update.toggleRequired", () => {
  const mockState = {
    prop1: "prop1",
    prop2: "prop2",
    required: false,
  };

  it("turns the required field on", () => {
    const action = toggleRequired(mockState.required);
    const newState = update(mockState, action);
    expect(newState.required).toBe(true);
  });

  it("turns the required field off", () => {
    const mockStateRequired = Object.assign({}, mockState, { required: true });
    const action = toggleRequired(mockStateRequired.required);
    const newState = update(mockStateRequired, action);
    expect(newState.required).toBe(false);
  });

  it("does not change other properties", () => {
    const action = toggleRequired(mockState.required);
    const newState = update(mockState, action);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });
});
