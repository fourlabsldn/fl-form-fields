export default (state) => {
  if (!Array.isArray(state.options)) {
    throw new Error("Invalid 'options' property. Not an array.");
  }

  const allOptionsHaveCaption = state.options.reduce((result, option) => {
    return result && (option.caption !== undefined);
  }, true);

  if (!allOptionsHaveCaption) {
    throw new Error("Invalid option in options array.");
  }
};
