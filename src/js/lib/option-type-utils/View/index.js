/* eslint-disable new-cap */

import React from "react";
import ViewWrapper from "../../View.Wrapper";
import validate from "./validate";
import ifEnterPressed from "./ifEnterPressed";
import reducer from "../update";
import { setNewOptionCaption, removeOption, addOption, toggleRequired, updateTitle } from "../actions";
import Options from "./View.Options";

/**
 * When configuration is open, this is what is going to be displayed
 * @method RenderConfigMode
 * @param  {Object} state : State
 * @param  {Function} update : State -> void // Will trigger a re-render
 */
const ConfigurationView = initialState =>
  ({ state, update }) =>
  (
    <div>
      <Options state={state} update={update} />

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
          onChange={e => update(setNewOptionCaption(e))}
          onKeyPress={ifEnterPressed(() => update(addOption(initialState)))}
        />
      </div>
    </div>
  );

// Renders the element without the config being open
const FormView = ({ state, update }) =>
  <Options state={state} update={update} />;

export default initialState =>
  ({ state, update: setState }) => {
    validate(state);

    const ViewToUse = state.configShowing
      ? ConfigurationView(initialState)
      : FormView;

    const update = action => setState(reducer(state, action));

    return (
      <ViewWrapper
        state={state}
        update={update}
        toggleRequired={toggleRequired}
        updateTitle={updateTitle(initialState)}
      >
        <ViewToUse state={state} update={update} />
      </ViewWrapper>
    );
  };
