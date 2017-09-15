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

```
.
├── foo
│   ├── package.json
│   └── yarn.lock
├── bar
│   ├── package.json
│   └── package-lock.json
└── baz
    └── package.json
```

```js
const pkgMan = require('pkg-man');

pkgMan('foo');
//=> yarn

pkgMan('bar');
//=> npm

pkgMan('baz');
//=> npm

pkgMan('foo', { default: 'yarn' });
//=> yarn
```

## API

### pkgMan([cwd], [options])

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Path to directory to perform detection

#### options

Type: `Object`

##### default

Type: `string`<br />
Default: `npm`

Default package manager if no lockfile was found

## Related

- [pkg-man-cli](https://github.com/luftywiranda13/pkg-man-cli) - CLI for this module
- [has-lockfile](https://github.com/luftywiranda13/has-lockfile) - Check which lockfile is present in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
