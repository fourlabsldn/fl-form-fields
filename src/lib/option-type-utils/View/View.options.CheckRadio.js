import React from "react";
import { curry } from "ramda";
import ifEnterPressed from "./ifEnterPressed";
import { updateOption, removeIfOptionIsNull } from "../actions";

const configView = curry((state, update, option, optionIndex) =>
(
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


const formView = curry((state, update, option) =>
(
  <div className="fl-fb-Field-option">
    <input
      type={state.htmlInputType}
      value={option.caption}
      name={state.title}
    />
    <span className="fl-fb-Field-option-text">{option.caption}</span>
  </div>
));

export default (state, update) =>
  state.configShowing
    ? state.options.map(configView(state, update))
    : state.options.map(formView(state, update));
