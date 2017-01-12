import { curry, pathOr } from "ramda";

export default curry((state, { initialState, propName, event }) => {
  const value = pathOr(null, ["target", "value"], event);
  const newValue = value || initialState()[propName];

  return Object.assign({}, state, {
    [propName]: newValue,
  });
});
