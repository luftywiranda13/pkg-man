'use strict';

const hasLockfile = require('has-lockfile');

module.exports = (cwd, opts) => {
  if (typeof cwd === 'object') {
    opts = cwd;
    cwd = process.cwd();
  }

  opts = opts || {};

  return hasLockfile(cwd) === 'yarn.lock' ? 'yarn' : opts.default || 'npm';
};
