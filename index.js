'use strict';

const hasLockfile = require('has-lockfile');

module.exports = (cwd, opts) => {
  if (typeof cwd === 'object') {
    opts = cwd;
    cwd = process.cwd();
  }

  opts = opts || {};

  const lockfiles = hasLockfile(cwd);

  if (lockfiles.length === 1) {
    return lockfiles[0] === 'package-lock.json' ? 'npm' : 'yarn';
  }

  return opts.default || 'npm';
};
