/* eslint-disable new-cap */

import React from "react";
import validate from "./validate";
import updateProperty from "./updateProperty";
import { removeOption, addOption } from "./option-handling";
import { curry } from "lodash/fp";
import ifEnterPressed from "./ifEnterPressed";

/**
 * When configuration is open, this is what is going to be displayed
 * @method RenderConfigMode
 * @param  {Object} state : State
 * @param  {Function} update : State -> void // Will trigger a re-render
 */
const ConfigurationView = (initialState, renderOptions, { state, update }) =>
(
  <div>
    <h2>
      <input
        type="text"
        className="fl-fb-Field-editable"
        onChange={updateProperty(initialState, state, update, "title")}
        defaultValue={state.title}
      />
    </h2>

    {renderOptions(state, update)}

    <div className="fl-fb-Field-config">
      <button
        onMouseDown={() => removeOption(state, update)}
        className="glyphicon-minus-sign glyphicon fl-fb-Field-config-btn"
      />
      <button
        onMouseDown={() => addOption(initialState, state, update)}
        className="glyphicon-plus-sign glyphicon fl-fb-Field-config-btn"
      />
      <input
        className="fl-fb-Field-config-captionInput"
        type="text"
        value={state.newOptionCaption}
        placeholder="Type a new option caption"
        onChange={updateProperty(initialState, state, update, "newOptionCaption")}
        onKeyPress={ifEnterPressed(() => addOption(initialState, state, update))}
      />
    </div>
  </div>
);

// Renders the element without the config being open
const FormView = (renderOptions, { state, update }) =>
(
  <div>
    <h2>{state.title}</h2>
    {renderOptions(state, update)}
  </div>
);

const View = curry((initialState, renderOptions, { state, update }) => {
  validate(state);
  return state.configShowing
    ? ConfigurationView(initialState, renderOptions, { state, update })
    : FormView(renderOptions, { state, update });
});

export default View;
