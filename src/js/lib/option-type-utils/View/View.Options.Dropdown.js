import React from "react";
import { curry } from "ramda";
import ifEnterPressed from "./ifEnterPressed";
import { updateOption, removeIfOptionIsNull } from "../actions";

const configView = curry((state, update, option, optionIndex) =>
(
  <div className="fl-fb-Field-option">
    <input
      className="fl-FormField-editable"
      type="text"
      value={option.caption}
      onKeyPress={ifEnterPressed(
        e => update(removeIfOptionIsNull(optionIndex, e))
      )}
      onChange={e => update(updateOption(optionIndex, e))}
    />
  </div>
));

const FormView = ({ state }) =>
(
  <select className="form-control">
    <option disabled>Please select an option</option>

    {state.options.map(option => (
      <option value={option.value || option.caption}>{option.caption}</option>
    ))}
  </select>
);

export default ({ state, update }) =>
  state.configShowing
    ? <div>{state.options.map(configView(state, update))}</div>
    : <FormView state={state} />;
