'use strict';

const pkgMan = require('./');

it('detects package manager', () => {
  expect(pkgMan({ cwd: 'fixtures/bar' })).toBe('yarn');
  expect(pkgMan({ cwd: 'fixtures/baz' })).toBe('npm');
  expect(pkgMan({ cwd: 'fixtures/foo' })).toBe('npm');
  expect(pkgMan({ cwd: 'fixtures/qux' })).toBe('npm');
  expect(pkgMan()).toBe('npm');
});

it('prefers actual result', () => {
  expect(pkgMan({ cwd: 'fixtures/baz', preferred: 'yarn' })).toBe('npm');
  expect(pkgMan({ cwd: 'fixtures/foo', preferred: 'yarn' })).toBe('npm');
  expect(pkgMan({ cwd: 'fixtures/qux', preferred: 'yarn' })).toBe('yarn');
  expect(pkgMan({ preferred: 'yarn' })).toBe('yarn');
});
