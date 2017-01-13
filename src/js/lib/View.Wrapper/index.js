import React from "react";
import RequiredSwitch from "./RequiredSwitch";

const Footer = ({ toggleRequired, state, update }) =>
(
  <div className="fl-FormField-footer">
    <RequiredSwitch
      fieldId={state.id}
      required={state.required}
      onMouseDown={() => update(toggleRequired(state.required))}
    />

    <span className="fl-FormField-footer-elementName">
      {state.displayName}
    </span>
  </div>
);

const Title = ({ updateTitle, state, update }) =>
  !state.configShowing
    ? <h2>{state.title}</h2>
    : (
    <h2>
      <input
        type="text"
        className="fl-fb-Field-editable"
        onChange={e => update(updateTitle(e))}
        defaultValue={state.title}
      />
    </h2>
  );

export default ({ children, state, update, toggleRequired, updateTitle }) =>
(
  <div className="fl-FormField">
    <Title
      updateTitle={updateTitle}
      state={state}
      update={update}
    />

    {children}

    <Footer
      toggleRequired={toggleRequired}
      state={state}
      update={update}
    />
  </div>
);
