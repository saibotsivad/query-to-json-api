const test = require('tape')
const { parse: queryify } = require('query-string')
const parse = require('./index.js')

const scenarios = [{
	query: 'key=value',
	expected: {
		key: 'value'
	}
},{
	query: 'include=author&fields[articles]=title,body&fields[people]=name&sort=-created,title',
	expected: {
		fields: {
			articles: [ 'title', 'body' ],
			people: [ 'name' ]
		},
		include: [ 'author' ],
		sort: [ '-created', 'title' ]
	}
},{
	query: 'include=a.b,c.d&fields[x]=y,z&fields[l]=m,n&sort=-h,i,-j,k',
	expected: {
		fields: {
			x: [ 'y', 'z' ],
			l: [ 'm', 'n' ]
		},
		include: [ 'a.b', 'c.d' ],
		sort: [ '-h', 'i', '-j', 'k' ]
	}
}]

test('all scenarios', t => {
	scenarios.forEach(({ query, expected }) => t.deepEqual(parse(queryify(query)), expected))
	t.end()
})
