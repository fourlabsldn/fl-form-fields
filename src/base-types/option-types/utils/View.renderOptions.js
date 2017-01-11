import React from "react";
import ifEnterPressed from "./ifEnterPressed";
import { updateOption, removeIfOptionIsNull } from "../actions";

export const renderRadioOrCheckboxOptions = (state, update) => {
  if (state.configShowing) {
    return state.options.map((option, optionIndex) => (
      <div className="fl-fb-Field-option">
        <input
          type={state.htmlInputType}
          value={option.caption}
          name={state.title}
        />
        <input
          type="text"
          className="fl-fb-Field-option-text fl-fb-Field-editable"
          value={option.caption}
          onKeyPress={ifEnterPressed(
            e => update(removeIfOptionIsNull(optionIndex, e))
          )}
          onChange={e => update(updateOption(optionIndex, e))}
        />
      </div>
    ));
  }

  return state.options.map(option => (
    <div className="fl-fb-Field-option">
      <input
        type={state.htmlInputType}
        value={option.caption}
        name={state.title}
      />
      <span className="fl-fb-Field-option-text">{option.caption}</span>
    </div>
  ));
};


export const renderDropdownOptions = (state, update) => {
  if (state.configShowing) {
    return state.options.map((option, optionIndex) => (
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
  }

  return (
    <select className="form-control">
      <option disabled>Please select an option</option>

      {state.options.map(option => (
        <option value={option.value || option.caption}>{option.caption}</option>
      ))}
    </select>
  );
};

export default (state, update) =>
  state.type === "Dropdown"
    ? renderDropdownOptions(state, update)
    : renderRadioOrCheckboxOptions(state, update);
