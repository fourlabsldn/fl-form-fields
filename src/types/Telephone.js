import buildTextFieldConstructor from "../lib/text-type-constructor";

const TextBox = buildTextFieldConstructor({
  type: 'TelephoneBox',
  displayName: 'Telephone Box',
  htmlInputType: 'tel',
});

export default TextBox;
