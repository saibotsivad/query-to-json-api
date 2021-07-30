# query-to-json-api

This module takes a query *object* and creates a copy that follows the
[JSON:API](http://jsonapi.org/) specs.

If you're turning a _string_ into a query object, I recommend
using the [query-string](https://github.com/sindresorhus/query-string)
module, which is fast and lightweight.

## general use

If you're using modern JavaScript:

```js
import queryToJsonApi from 'query-to-json-api'
const url = new URL('https://site.com/?fields[articles]=title,body')

// normal query
console.log(url.searchParams)
// > URLSearchParams { 'fields[articles]' => 'title,body' }

// query for JSON:API
console.log(queryToJsonApi(url.searchParams))
// > { fields: { articles: [ 'title', 'body' ] } }
```

If you're still on older JavaScript, the [query-string](https://www.npmjs.com/package/query-string) library is pretty good:

```js
const queryToJsonApi = require('query-to-json-api')
const parseQueryString = require('query-string')

// normal query parsing
const dirtyQuery = parseQueryString('fields[articles]=title,body')
// {
//     'fields[articles]': 'title,body'
// }

// query for JSON-API
const cleanQuery = queryToJsonApi(dirtyQuery)
// {
//     fields: {
//         articles: [
//             'title',
//             'body'
//         ]
//     }
// }
```

## license

Published and released under the [VOL](http://veryopenlicense.com).
