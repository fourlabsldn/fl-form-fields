import { pathOr } from "ramda";

export default (state, { event }) =>
  Object.assign(
    {},
    state,
    {
      newOptionCaption: pathOr("", ["target", "value"], event),
    },
  );
