import buildTextFieldConstructor from "../lib/text-type-constructor";

const TextBox = buildTextFieldConstructor({
  type: 'TextBox',
  displayName: 'Text Box',
  htmlInputType: 'text',
});

export default TextBox;
