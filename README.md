[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][downloads-url] [![MIT License][license-image]][license-url]

# timezone-enum

Lightweight timezone enum for JavaScript or TypeScript.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/timezone-enum
[npm-version-image]: http://img.shields.io/npm/v/timezone-enum.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/timezone-enum.svg?style=flat
[downloads-url]: https://npmcharts.com/compare/timezone-enum?minimal=true

## Installing

### Package manager

Using npm:

```bash
npm install timezone-enum
```

## Using

Once the package is installed, use the default import like so:

```js
import Timezone from 'timezone-enum';
```

And then you can do this anywhere in the module and expect intellisense to work as you're typing:

```js
const currentTimezone = Timezone['US/Pacific'];
```
