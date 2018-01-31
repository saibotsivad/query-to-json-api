# query-to-json-api

This module takes a query string and parses it, following the
[JSON-API](http://jsonapi.org/) specs.

## general use

```js
const parse = require('query-to-json-api')

const query = parse('fields[articles]=title,body')
// {
//     fields: {
//         articles: [
//             'title',
//             'body'
//         ]
//     }
// }
```

A preceding `?` character is fine, it'll get parsed correctly.

## credit

The bulk of the parsing work is done with the
[query-string](https://github.com/sindresorhus/query-string)
module, this just does the bit that's JSON-API specific.

## license

Published and released under the [VOL](http://veryopenlicense.com).
