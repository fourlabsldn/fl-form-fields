import React from "react";

export default ({ required, fieldId }) =>
(
  <label
    className="fl-fb-Field-configuration-switch-required"
  >
    Required
    <div className="fl-fb-ui-switch">
      <input
        className="fl-fb-ui-switch-toggle fl-fb-ui-switch-toggle-round"
        type="checkbox"
        id={`fl-fb-ui-switch-${fieldId}`}
        checked={required}
      />
      <label htmlFor={`fl-fb-ui-switch-${fieldId}`}> </label>
    </div >
  </label>
);
