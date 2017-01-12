import buildTextFieldConstructor from "../lib/text-type-constructor";

const EmailBox = buildTextFieldConstructor({
  type: 'EmailBox',
  displayName: 'Email Box',
  htmlInputType: 'email',
});

export default EmailBox;
