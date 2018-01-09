'use strict';

const hasLockfile = require('has-lockfile');

const pkgMan = ({ cwd = process.cwd(), preferred = 'npm' } = {}) => {
  const lockfiles = hasLockfile(cwd);

  if (lockfiles.length === 1) {
    return lockfiles[0] === 'package-lock.json' ? 'npm' : 'yarn';
  }

  return preferred;
};

module.exports = pkgMan;
