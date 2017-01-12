import React from "react";
import { curry } from "ramda";
import ifEnterPressed from "./ifEnterPressed";
import { updateOption, removeIfOptionIsNull } from "../actions";

const configView = curry((state, update, option, optionIndex) =>
(
  <div className="fl-fb-Field-option">
    <input
      className="fl-fb-Field-editable"
      type="text"
      value={option.caption}
      onKeyPress={ifEnterPressed(
        e => update(removeIfOptionIsNull(optionIndex, e))
      )}
      onChange={e => update(updateOption(optionIndex, e))}
    />
  </div>
));

const formView = state =>
(
  <div className="fl-fb-Field-dropdown-options">
    <select className="fl-fb-Field-dropdown-options-select">
      <option disabled>Please select an option</option>

      {state.options.map(option => (
        <option value={option.value || option.caption}>{option.caption}</option>
      ))}
    </select>
  </div>
);

export default (state, update) =>
  state.configShowing
    ? state.options.map(configView(state, update))
    : formView(state);
