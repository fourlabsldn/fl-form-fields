import buildTextFieldConstructor from "../lib/text-type-constructor";

const TextBox = buildTextFieldConstructor({
    type: 'DateBox',
    displayName: 'Date Field',
    htmlInputType: 'date',
});

export default TextBox;
