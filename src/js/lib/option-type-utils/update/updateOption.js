import { curry } from "ramda";

// Updated the caption text of an existing option
export default curry((state, { optionIndex, event }) => {
  const caption = event.target.value;
  const options = state.options.map((opt, idx) =>
    idx === optionIndex
      ? { caption }
      : opt
  );

  return Object.assign(
    {},
    state,
    { options }
  );
});
