/* eslint-env jasmine */
import update from "../../../../src/js/lib/option-type-utils/update";
import { removeIfOptionIsNull } from "../../../../src/js/lib/option-type-utils/actions";

describe("option-type update.removeIfOptionIsNull", () => {
  const mockState = {
    prop1: "prop1",
    prop2: "prop2",
    options: [
      { caption: "default caption1" },
      { caption: "default caption2" },
      { caption: "default caption3" },
    ],
  };

  it("removes an option at an index if the event content is empty or null", () => {
    const mockEvent = { target: { value: "" } };
    const action = removeIfOptionIsNull(0, mockEvent);
    const newState = update(mockState, action);
    expect(newState.options.length).toBe(mockState.options.length - 1);
    expect(newState.options[0]).toBe(mockState.options[1]);
    expect(newState.options[1]).toBe(mockState.options[2]);

    const mockEvent2 = { target: { value: "eventValue" } };
    const action2 = removeIfOptionIsNull(1, mockEvent2);
    const newState2 = update(mockState, action2);
    expect(newState2.options.length).toBe(mockState.options.length - 1);
    expect(newState2.options[0]).toBe(mockState.options[0]);
    expect(newState2.options[1]).toBe(mockState.options[2]);

    const mockEvent3 = { target: { value: "eventValue" } };
    const action3 = removeIfOptionIsNull(2, mockEvent3);
    const newState4 = update(mockState, action3);
    expect(newState4.options.length).toBe(mockState.options.length - 1);
    expect(newState4.options[0]).toBe(mockState.options[0]);
    expect(newState4.options[1]).toBe(mockState.options[1]);
  });

  it("does not remove an option at an index if it not empty", () => {
    const mockEvent = { target: { value: "eventValue" } };
    const action = removeIfOptionIsNull(0, mockEvent);
    const newState = update(mockState, action);
    expect(newState.options.length).toBe(mockState.options.length);
    expect(newState.options[0]).toBe(mockState.options[0]);
    expect(newState.options[1]).toBe(mockState.options[1]);
    expect(newState.options[2]).toBe(mockState.options[2]);
  });
});
