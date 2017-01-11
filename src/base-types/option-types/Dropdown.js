/* eslint-disable new-cap */
import View from "./utils/View";
import defaultConfig from "./utils/default-config";

const info =
  {
    type: "Dropdown",
    displayName: "Dropdown",
    group: "Options Components",
  };

const initialState = () =>
  ({
    // Field type specific
    ...defaultConfig,
    ...info,
  });

export default {
  info,
  initialState,
  RenderEditor: View(initialState),
};
