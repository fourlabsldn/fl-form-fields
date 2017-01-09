import allTypes from '../src';

describe('Smoke test', () => {
  expect(Object.keys(allTypes).length).toBeGreaterThan(0);
});
