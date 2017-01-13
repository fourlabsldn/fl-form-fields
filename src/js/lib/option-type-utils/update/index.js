import { curry } from "ramda";
import addOption from "./addOption";
import removeOption from "./removeOption";
import updateOption from "./updateOption";
import removeIfOptionIsNull from "./removeIfOptionIsNull";
import setNewOptionCaption from "./setNewOptionCaption";
import toggleRequired from "./toggleRequired";
import updateTitle from "./updateTitle";

const possibleActions = {
  addOption,
  removeOption,
  updateOption,
  removeIfOptionIsNull,
  setNewOptionCaption,
  toggleRequired,
  updateTitle,
};

const update = curry((state, action) =>
  possibleActions[action.type](state, action)
);

export default update;
