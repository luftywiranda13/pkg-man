'use strict';

const hasLockfile = require('has-lockfile');

module.exports = (cwd, opts) => {
  if (typeof cwd === 'object') {
    opts = cwd;
    cwd = process.cwd();
  }

  opts = opts || {};

  const lockfile = hasLockfile(cwd);

  switch (lockfile) {
    case 'package-lock.json':
      return 'npm';
    case 'yarn.lock':
      return 'yarn';
    default:
      return opts.default || 'npm';
  }
};
