import { curry } from "lodash/fp";

export default curry((state, { initialState, propName, event }) => {
  const value = event.target.value;
  const newValue = value || initialState()[propName];

  return Object.assign({}, state, {
    [propName]: newValue,
  });
});
