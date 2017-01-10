/* eslint-env jasmine */
import update from "../../../../src/base-types/option-types/update";
import { addOption } from "../../../../src/base-types/option-types/actions";

describe("option-type update.addOption", () => {
  const mockInitialState = () =>
    ({
      options: [
        { caption: "placeholder" },
      ],
    });

  const mockState = {
    prop1: "prop1",
    prop2: "prop2",
    options: [
      { caption: "default caption1" },
      { caption: "default caption2" },
      { caption: "default caption3" },
    ],
    newOptionCaption: "",
  };

  it("does not add a repeated option", () => {
    const stateWithNewOptionRepeated = Object.assign({}, mockState, {
      newOptionCaption: mockState.options[0].caption,
    });

    const action = addOption(mockInitialState);
    const newState = update(stateWithNewOptionRepeated, action);
    expect(newState.options.length).toBe(stateWithNewOptionRepeated.options.length);
  });

  it("does not add an empty option", () => {
    const stateWithNewOptionEmpty = Object.assign({}, mockState, {
      newOptionCaption: "",
    });

    const action = addOption(mockInitialState);
    const newState = update(stateWithNewOptionEmpty, action);
    expect(newState.options.length).toBe(stateWithNewOptionEmpty.options.length);
  });

  it("Adds an option with a valid value", () => {
    const caption = "A value";
    const stateWithNewOptionValid = Object.assign({}, mockState, {
      newOptionCaption: caption,
    });

    const action = addOption(mockInitialState);
    const newState = update(stateWithNewOptionValid, action);
    expect(newState.options.length).toBeGreaterThan(stateWithNewOptionValid.options.length);
    expect(newState.options[3].caption).toBe(caption);
  });

  it("Does not change other state propperties or options when adding one", () => {
    const stateWithNewOptionValid = Object.assign({}, mockState, {
      newOptionCaption: "A value",
    });

    const action = addOption(mockInitialState);
    const newState = update(stateWithNewOptionValid, action);
    expect(newState.options[0].caption).toBe(stateWithNewOptionValid.options[0].caption);
    expect(newState.options[1].caption).toBe(stateWithNewOptionValid.options[1].caption);
    expect(newState.options[2].caption).toBe(stateWithNewOptionValid.options[2].caption);
    expect(newState.prop1).toBe(mockState.prop1);
    expect(newState.prop2).toBe(mockState.prop2);
  });

  it("Removes default option when adding a new one", () => {
    const caption = "A value";
    const stateWithPlaceholder = Object.assign({}, mockState, {
      options: mockInitialState().options,
      newOptionCaption: caption,
    });

    const action = addOption(mockInitialState);
    const newState = update(stateWithPlaceholder, action);
    expect(newState.options.length).toBe(1);
    expect(newState.options[0].caption).toBe(caption);
  });
});
