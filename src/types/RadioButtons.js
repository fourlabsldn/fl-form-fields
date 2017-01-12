/* eslint-disable new-cap */
import View from "../lib/option-type-utils/View";
import defaultConfig from "../lib/option-type-utils/default-config";

const info =
  {
    type: "RadioButtons",
    displayName: "Radio Button",
    group: "Options Components",
  };

const initialState = () =>
  ({
    // Field type specific
    ...defaultConfig,
    ...info,
    htmlInputType: "radio",
  });

export default {
  info,
  initialState,
  RenderEditor: View(initialState),
};
