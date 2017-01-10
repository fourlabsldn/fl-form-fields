import { curry } from "ramda";

export default curry((state, { optionIndex, event }) => {
  const caption = event.target.value;
  if (caption) { return state; }
  const optionsBefore = state.options.slice(0, optionIndex);
  const optionsAfter = state.options.slice(optionIndex + 1, state.options.length);
  const options = optionsBefore.concat(optionsAfter);

  return Object.assign({}, state, { options });
});
