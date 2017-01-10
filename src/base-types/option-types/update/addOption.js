import { prop } from "ramda";

// Add the option in the config input fields
export default (state, { initialState }) => {
  const newOption = {
    caption: state.newOptionCaption.trim(),
  };

  const optionIsEmpty = !newOption.caption;
  const valueAlreadyExists = state.options
    .map(prop("caption"))
    .indexOf(newOption.caption) !== -1;

  if (optionIsEmpty || valueAlreadyExists) {
    return state;
  }

  // Add option and remove default option
  const defaultOptionCaption = initialState().options[0].caption;
  const options = state.options
    .filter(o => o.caption !== defaultOptionCaption) // Remove default option
    .concat([newOption]); // Add new option

  return Object.assign({}, state, {
    options,
    newOptionCaption: "",
  });
};
