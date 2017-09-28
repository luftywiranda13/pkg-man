# pkg-man

[![Package Version](https://img.shields.io/npm/v/pkg-man.svg)](https://www.npmjs.com/package/pkg-man)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/pkg-man/master.svg)](https://travis-ci.org/luftywiranda13/pkg-man)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/pkg-man/master.svg)](https://codecov.io/gh/luftywiranda13/pkg-man)
[![Downloads Status](https://img.shields.io/npm/dm/pkg-man.svg)](https://npm-stat.com/charts.html?package=pkg-man&from=2016-04-01)

Detect which package manager that should be used

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

pkgMan('bar');
//=> yarn

pkgMan('baz');
//=> npm

pkgMan('foo');
//=> npm

pkgMan();
//=> npm

pkgMan({ default: 'yarn' });
//=> yarn

pkgMan('baz', { default: 'yarn' });
//=> yarn
```

## API

### pkgMan([cwd][, options])

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Current working directory.

#### options

Type: `Object`

##### default

Type: `string`<br />
Default: `npm`

Default package manager if no lockfiles found.

## Related

* [pkg-man-cli](https://github.com/luftywiranda13/pkg-man-cli) － CLI for this module
* [has-lockfile](https://github.com/luftywiranda13/has-lockfile) － Detect lockfiles in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
