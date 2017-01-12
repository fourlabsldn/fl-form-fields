/* eslint-env jasmine */
/* eslint-disable quote-props */

import ReactDOM from "react-dom";
import Dropdown from "../../../js/types/Dropdown";

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
  "newOptionCaption": "",
  "id": 1484138162795,
  "configShowing": false,
};

const id = _ => _;

describe("Dropdown.View with config not showing", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    ReactDOM.render(Dropdown.RenderEditor({ state: mockState, update: id }), container); // eslint-disable-line new-cap, max-len
  });

  it("outputs at least something", () => {
    expect(container.children.length).toBeGreaterThan(0);
  });

  it("adds the title that is in the state", () => {
    const title = container.querySelector("h2");
    expect(title.innerHTML).toBe(mockState.title);
  });

  it("adds a default placeholder", () => {
    const options = container.querySelectorAll("option");
    expect(options[0].innerHTML).toBe("Please select an option");
  });

  it("adds the default placeholder as selected and disabled", () => {
    const options = container.querySelectorAll("option");
    expect(options[0].hasAttribute("disabled")).toBe(true);
  });

  it("creates the correct option elements", () => {
    const options = container.querySelectorAll("option");
    expect(options.length).toBe(mockState.options.length + 1);
    expect(options[1].innerHTML).toBe(mockState.options[0].caption);
    expect(options[2].innerHTML).toBe(mockState.options[1].caption);
    expect(options[3].innerHTML).toBe(mockState.options[2].caption);
  });

  it("adds the caption content as option `value` if no value key is specified", () => {
    const options = container.querySelectorAll("option");
    expect(options[1].getAttribute("value")).toBe(mockState.options[0].caption);
    expect(options[2].getAttribute("value")).toBe(mockState.options[1].caption);
  });


  it("adds the value content as option `value` if specified", () => {
    const options = container.querySelectorAll("option");
    expect(options[3].getAttribute("value")).toBe(mockState.options[2].value);
  });
});
