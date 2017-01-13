import React from "react";

export default ({ required, fieldId }) =>
(
  <label
    className="fl-FormField-switch-required"
  >
    Required
    <div className="fl-FormField-switch">
      <input
        className="fl-FormField-switch-toggle fl-FormField-switch-toggle-round"
        type="checkbox"
        id={`fl-FormField-switch-${fieldId}`}
        checked={required}
      />
      <label htmlFor={`fl-FormField-switch-${fieldId}`}> </label>
    </div >
  </label>
);
