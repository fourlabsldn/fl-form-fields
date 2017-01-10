import { overshadow } from "../../utils";
import { curry } from "lodash/fp";

export const updateProperty = curry((initialState, state, update, propName, event) => {
  const value = event.target.value;
  const newValue = value || initialState()[propName];
  const newState = overshadow(state, { [propName]: newValue });
  update(newState);
});
