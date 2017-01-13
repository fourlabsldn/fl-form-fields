import { curry } from "ramda";
// Possible state-changing actions

export const addOption = (initialState) =>
  ({
    type: "addOption",
    initialState,
  });

export const removeOption = () =>
  ({
    type: "removeOption",
  });

export const removeIfOptionIsNull = (optionIndex, event) =>
  ({
    type: "removeIfOptionIsNull",
    optionIndex,
    event,
  });

export const updateOption = (optionIndex, event) =>
  ({
    type: "updateOption",
    optionIndex,
    event,
  });

export const toggleRequired = required =>
  ({
    type: "toggleRequired",
    required,
  });

export const updateTitle = curry((initialState, event) =>
  ({
    type: "updateTitle",
    initialState,
    event,
  })
);

export const setNewOptionCaption = event =>
  ({
    type: "setNewOptionCaption",
    event,
  });
