
// Remove the last option
export default (state) =>
  Object.assign({},
    state, {
      options: state.options.slice(0, state.options.length - 1),
    },
  );
