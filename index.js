'use strict';

const hasLockfile = require('has-lockfile');

const pkgMan = ({ cwd = process.cwd(), preferred = 'npm' } = {}) => {
  const lockfiles = hasLockfile.lockfiles(cwd);

  if (lockfiles.length > 1) {
    return preferred;
  }

  switch (lockfiles[0]) {
    case 'package-lock.json':
      return 'npm';
    case 'npm-shrinkwrap.json':
      return 'npm';
    case 'yarn.lock':
      return 'yarn';
    default:
      return preferred;
  }
};

module.exports = pkgMan;
