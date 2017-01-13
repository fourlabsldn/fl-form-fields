import React from "react";
import DropdownOptions from "./View.Options.Dropdown";
import CheckRadioOptions from "./View.Options.CheckRadio";

export default ({ state, update }) =>
  state.type === "Dropdown"
    ? <DropdownOptions state={state} update={update} />
    : <CheckRadioOptions state={state} update={update} />;
