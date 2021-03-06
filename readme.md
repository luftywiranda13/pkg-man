# pkg-man

> Detect which package manager that should be used

[![Package Version](https://img.shields.io/npm/v/pkg-man.svg?style=flat-square)](https://www.npmjs.com/package/pkg-man)
[![Downloads Status](https://img.shields.io/npm/dm/pkg-man.svg?style=flat-square)](https://npm-stat.com/charts.html?package=pkg-man&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/pkg-man/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/pkg-man)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/pkg-man/master.svg?style=flat-square)](https://codecov.io/gh/luftywiranda13/pkg-man)

## Installation

```sh
npm install --save pkg-man
```

## Usage

```sh
$ tree
├── bar
│   ├── package.json
│   └── yarn.lock
├── baz
│   ├── package-lock.json
│   ├── package.json
│   └── yarn.lock
├── foo
│   ├── package-lock.json
│   └── package.json
└── package.json
```

```js
const pkgMan = require('pkg-man');

pkgMan({ cwd: 'bar' });
//=> yarn

pkgMan({ cwd: 'baz' });
//=> npm

pkgMan({ cwd: 'foo' });
//=> npm

pkgMan();
//=> npm

pkgMan({ preferred: 'yarn' });
//=> yarn

pkgMan({ cwd: 'baz', preferred: 'yarn' });
//=> yarn
```

## API

### pkgMan([options])

#### options

Type: `Object`

##### cwd

Type: `string`<br />
Default: `process.cwd()`

Current working directory.

##### preferred

Type: `string`<br />
Default: `npm`

Preferred package manager if no lockfile or multiple lockfiles found.

## Related

* [pkg-man-cli](https://github.com/luftywiranda13/pkg-man-cli) － CLI for this module
* [has-lockfile](https://github.com/luftywiranda13/has-lockfile) － Detect lockfiles in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
