/* eslint-env jasmine */
/* eslint-disable quote-props */

import ReactDOM from "react-dom";
import Dropdown from "../../../src/js/types/Dropdown";

const mockState = {
  "type": "Dropdown",
  "displayName": "Dropdown",
  "group": "Options Components",
  "required": true,
  "title": "My Title",
  "options": [
    {
      "caption": "Option number 1",
    },
    {
      "caption": "Option number 2",
    },
    {
      "caption": "Option number 3",
      "value": "number 3",
    },
  ],
  "newOptionCaption": "new option",
  "id": 1484138162795,
  "configShowing": true,
};

const id = _ => _;

describe("Dropdown.View with config showing", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    ReactDOM.render(Dropdown.RenderEditor({ state: mockState, update: id }), container); // eslint-disable-line new-cap, max-len
  });

  it("makes the title editable", () => {
    const titleInput = container.querySelector("h2").querySelector("input");
    expect(titleInput.value).toBe(mockState.title);
  });

  it("makes options editable", () => {
    const inputs = container.querySelectorAll("input");
    const inputsContents = [].map.call(inputs, i => i.value);

    expect(inputsContents.indexOf(mockState.options[0].caption)).not.toBe(-1);
    expect(inputsContents.indexOf(mockState.options[1].caption)).not.toBe(-1);
    expect(inputsContents.indexOf(mockState.options[2].caption)).not.toBe(-1);
  });

  it("creates an input box for new options", () => {
    const newOptionInput = container.querySelector(`input[value="${mockState.newOptionCaption}"]`);
    expect(newOptionInput).not.toBe(undefined);
  });
});
