import addOption from "./addOption";
import removeOption from "./removeOption";
import updateOption from "./updateOption";
import removeIfOptionIsNull from "./removeIfOptionIsNull";
import updateProperty from "./updateProperty";

const possibleActions = {
  addOption,
  removeOption,
  updateOption,
  removeIfOptionIsNull,
  updateProperty,
};

const update = (state, action) =>
  possibleActions[action.type](state, action);

export default update;
