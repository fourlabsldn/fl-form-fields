import buildTextFieldConstructor from "../lib/text-type-constructor";

const TextBox = buildTextFieldConstructor({
  type: 'NumberBox',
  displayName: 'Number Box',
  htmlInputType: 'number',
});

export default TextBox;
