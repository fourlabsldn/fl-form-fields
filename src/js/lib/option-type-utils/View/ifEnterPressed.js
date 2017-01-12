import { curry } from "lodash/fp";

export default curry((f, e) => {
  if (event.key === "Enter") {
    f(e);
  }
});
