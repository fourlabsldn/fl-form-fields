import { pathOr } from "ramda";

export default (state, { initialState, event }) =>
  Object.assign(
    {},
    state,
    {
      title: pathOr(initialState().title, ["target", "value"], event),
    },
  );
