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

export default function update(state, action) {
  return possibleActions[action.type](state);
}
