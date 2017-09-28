'use strict';

const pkgMan = require('./');

it('detects package manager', () => {
  expect(pkgMan('fixtures/bar')).toBe('yarn');
  expect(pkgMan('fixtures/baz')).toBe('npm');
  expect(pkgMan('fixtures/foo')).toBe('npm');
  expect(pkgMan()).toBe('npm');
});

it('prefers actual result', () => {
  expect(pkgMan('fixtures/baz', { default: 'yarn' })).toBe('yarn');
  expect(pkgMan('fixtures/foo', { default: 'yarn' })).toBe('npm');
  expect(pkgMan({ default: 'yarn' })).toBe('yarn');
});
