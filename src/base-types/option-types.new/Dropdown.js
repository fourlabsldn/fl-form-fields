/* eslint-disable new-cap */
import View from "./utils/View";
import defaultConfig from "./utils/default-config";

const info =
  {
    type: "Checkboxes",
    displayName: "Checkboxes",
    group: "Options Components",
  };

const initialState = () =>
  ({
    // Field type specific
    ...defaultConfig,
    ...info,
    htmlInputType: "checkbox",
  });

export default {
  info,
  initialState,
  RenderEditor: View(initialState),
};
