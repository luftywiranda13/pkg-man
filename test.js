'use strict';

const pkgMan = require('./');

it('has default values', () => {
  expect(pkgMan()).toBe('npm');
  expect(pkgMan({default: 'yarn'})).toBe('yarn');

  expect(pkgMan('fixtures')).toBe('npm');
  expect(pkgMan('fixtures', {default: 'yarn'})).toBe('yarn');
});

it('prefers actual result', () => {
  expect(pkgMan('fixtures/foo')).toBe('npm');
  expect(pkgMan('fixtures/foo', {default: 'yarn'})).toBe('npm');

  expect(pkgMan('fixtures/bar')).toBe('yarn');
  expect(pkgMan('fixtures/bar', {default: 'npm'})).toBe('yarn');
});
