/* eslint-disable new-cap */

import React from "react";
import validate from "./validate";
import { curry } from "lodash/fp";
import ifEnterPressed from "./ifEnterPressed";
import stateUpdate from "../update";
import { updateProperty, removeOption, addOption } from "../actions";
import dropdownOptions from "./View.options.Dropdown";
import checkRadioOptions from "./View.options.CheckRadio";

const renderOptions = (state, update) =>
  state.type === "Dropdown"
    ? dropdownOptions(state, update)
    : checkRadioOptions(state, update);

/**
 * When configuration is open, this is what is going to be displayed
 * @method RenderConfigMode
 * @param  {Object} state : State
 * @param  {Function} update : State -> void // Will trigger a re-render
 */
const ConfigurationView = (initialState, { state, update }) => {
  return (
    <div>
      <h2>
        <input
          type="text"
          className="fl-fb-Field-editable"
          onChange={e => update(updateProperty(initialState, "title", e))}
          defaultValue={state.title}
        />
      </h2>

      {renderOptions(state, update)}

      <div className="fl-fb-Field-config">
        <button
          onMouseDown={() => update(removeOption())}
          className="glyphicon-minus-sign glyphicon fl-fb-Field-config-btn"
        />
        <button
          onMouseDown={() => update(addOption(initialState))}
          className="glyphicon-plus-sign glyphicon fl-fb-Field-config-btn"
        />
        <input
          className="fl-fb-Field-config-captionInput"
          type="text"
          value={state.newOptionCaption}
          placeholder="Type a new option caption"
          onChange={e => update(updateProperty(initialState, "newOptionCaption", e))}
          onKeyPress={ifEnterPressed(() => update(addOption(initialState)))}
        />
      </div>
    </div>
  );
};

// Renders the element without the config being open
const FormView = ({ state, update }) =>
(
  <div>
    <h2>{state.title}</h2>
    {renderOptions(state, update)}
  </div>
);

const View = curry((initialState, { state, update }) => {
  validate(state);
  const newUpdate = action => update(stateUpdate(state, action));

  return state.configShowing
    ? ConfigurationView(initialState, { state, update: newUpdate })
    : FormView({ state, update: newUpdate });
});

export default View;
