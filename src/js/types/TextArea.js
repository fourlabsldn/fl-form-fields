import buildTextFieldConstructor from "../lib/text-type-constructor";

const TextBox = buildTextFieldConstructor({
  type: 'TextArea',
  displayName: 'Text Area',
  htmlElement: 'textarea',
});

export default TextBox;
