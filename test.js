import { test } from 'zora'
import { parse } from 'query-string'
import queryToJsonApi from './src/index.js'

const scenarios = [
	{
		description: 'a simple key=value transform',
		query: 'key=value',
		expected: {
			key: 'value',
		},
	},
	{
		description: 'parsing many keys into arrays',
		query: 'include=author&fields[articles]=title,body&fields[people]=name&sort=-created,title',
		expected: {
			fields: {
				articles: [ 'title', 'body' ],
				people: [ 'name' ],
			},
			include: [ 'author' ],
			sort: [ '-created', 'title' ],
		},
	},
	{
		description: 'parsing includes with dot notation',
		query: 'include=a.b,c.d&fields[x]=y,z&fields[l]=m,n&sort=-h,i,-j,k',
		expected: {
			fields: {
				x: [ 'y', 'z' ],
				l: [ 'm', 'n' ],
			},
			include: [ 'a.b', 'c.d' ],
			sort: [ '-h', 'i', '-j', 'k' ],
		},
	},
	{
		description: 'parsing `filter` does not do anything with square brackets',
		query: 'filter[a]=1&filter[b][c]=2',
		expected: {
			'filter[a]': '1',
			'filter[b][c]': '2',
		},
	},
	{
		description: 'parsing `page` does not do anything with square brackets',
		query: 'page[number]=1&page[size]=10',
		expected: {
			'page[number]': '1',
			'page[size]': '10',
		},
	},
]

test('all scenarios', t => {
	scenarios.forEach(({
		description,
		query,
		expected,
	}) => t.deepEqual(queryToJsonApi(parse(query)), expected, description))
})
