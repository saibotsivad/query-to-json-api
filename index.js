const someSortOfSquareBraces = /^(\w+)\[(.+)\]$/

const parseKeys = partial => {
	const match = someSortOfSquareBraces.exec(partial) || []
	return {
		parameter: match[1] || partial,
		type: match[2],
		key: partial
	}
}

const parametersThatCanBeCommaDelimited = [
	'fields',
	'include',
	'sort'
]

module.exports = dirtyQuery => {
	const keys = Object.keys(dirtyQuery).map(parseKeys)

	const query = keys.reduce((map, { parameter, type, key }) => {
		const splittable = parametersThatCanBeCommaDelimited.includes(parameter)
		if (!type) {
			map[parameter] = splittable
				? (dirtyQuery[parameter] || '').split(',')
				: dirtyQuery[parameter]
		} else {
			map[parameter] = map[parameter] || {}
			map[parameter][type] = splittable
				? (dirtyQuery[key] || '').split(',')
				: dirtyQuery[key]
		}
		return map
	}, {})

	return query
}
