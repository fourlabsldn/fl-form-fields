export default (state, { required }) =>
  Object.assign(
    {},
    state,
    { required: !required },
  );
