import { overshadow } from "../../utils";
import { get, curry } from "lodash/fp";

// Remove the last option
export const removeOption = (state, update) => {
  const options = state.options.slice(0, state.options.length - 1);
  const newState = overshadow(state, { options });
  update(newState);
};

// Add the option in the config input fields
export const addOption = (initialState, state, update) => {
  const newOption = {
    caption: state.newOptionCaption.trim(),
  };

  const optionIsEmpty = !newOption.caption;
  const valueAlreadyExists = state.options
    .map(get("caption"))
    .indexOf(newOption.caption) !== -1;

  if (optionIsEmpty || valueAlreadyExists) {
    return;
  }

  // Add option and remove default option
  const defaultOptionCaption = initialState().options[0].caption;
  const options = state.options
    .filter(o => o.caption !== defaultOptionCaption) // Remove default option
    .concat([newOption]); // Add new option

  const newState = overshadow(state, {
    options,
    newOptionCaption: "",
  });
  update(newState);
};

// Updated the caption text of an existing option
export const updateOption = curry((state, update, optionIndex, event) => {
  const caption = event.target.value;
  const options = Array.from(state.options);
  options[optionIndex] = overshadow(options[optionIndex], { caption });

  const newState = overshadow(state, { options });
  update(newState);
});

export const removeIfOptionIsNull = curry((state, update, optionIndex, event) => {
  const caption = event.target.value;
  if (caption) { return; }
  const optionsBefore = state.options.slice(0, optionIndex);
  const optionsAfter = state.options.slice(optionIndex + 1, state.options.length);
  const options = optionsBefore.concat(optionsAfter);
  const newState = overshadow(state, { options });
  update(newState);
});
