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

export const updateProperty = (initialState, propName, event) =>
  ({
    type: "updateProperty",
    initialState,
    propName,
    event,
  });
