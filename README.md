# [rollup-plugin-post-replace](https://github.com/epiloque/rollup-plugin-post-replace)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## [Installation](https://github.com/epiloque/rollup-plugin-post-replace#Installation)

```bash
npm install --save-dev rollup-plugin-post-replace
```

## [Usage](https://github.com/epiloque/rollup-plugin-post-replace#Usage)

```js
import { rollup } from 'rollup';
import replace from 'rollup-plugin-post-replace';

rollup({
  entry: 'main.js',
  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify( 'production' )
    })
  ]
}).then(...)
```

## [Options](https://github.com/epiloque/rollup-plugin-post-replace#Options)

```js
{
  // To replace every occurence of `<@foo@>` instead of every
  // occurence of `foo`, supply delimiters
  delimiters: [ '<@', '@>' ],

  // All other options are treated as `string: replacement`
  // replacers...
  VERSION: '1.0.0',
  ENVIRONMENT: JSON.stringify( 'development' ),

  // ...unless you want to be careful about separating
  // values from other options, in which case you can:
  values: {
    VERSION: '1.0.0',
    ENVIRONMENT: JSON.stringify( 'development' )
  }
}
```

## [Thanks](https://github.com/epiloque/rollup-plugin-post-replace#Thanks)

Thanks to [Rich Harris](https://github.com/Rich-Harris) and the rollup community.

## [License](https://github.com/epiloque/rollup-plugin-post-replace#License)

rollup-plugin-post-replace is released under the terms of the MIT License.

This software includes or is derivative of works distributed under the licenses
listed below. Please refer to the specific files and/or packages for more
detailed information about the authors, copyright notices, and licenses.

-   [rollup-plugin-replace](https://github.com/rollup/rollup-plugin-replace) is released under the
    terms of the MIT license.

[npm-url]: https://www.npmjs.com/package/rollup-plugin-post-replace

[npm-image]: https://img.shields.io/npm/v/rollup-plugin-post-replace.svg

[travis-url]: https://travis-ci.org/epiloque/rollup-plugin-post-replace

[travis-image]: https://img.shields.io/travis/epiloque/rollup-plugin-post-replace.svg?branch=master
