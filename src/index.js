const singleDepthSquareBraces = /^(\w+)\[(.+)]$/

const parametersThatCanBeCommaDelimited = {
	fields: true,
	include: true,
	sort: true,
}

const parametersThatCanUseSingleDepthSquareBrackets = {
	fields: true,
}

const getKeys = query => typeof query.keys === 'function' // to support URLSearchParams
	? Array.from(query.keys())
	: Object.keys(query)

export default dirtyQuery => getKeys(dirtyQuery)
	.reduce((query, key) => {
		const [ , parameterName, parameterMapKey ] = singleDepthSquareBraces.exec(key) || []
		const splittable = parametersThatCanBeCommaDelimited[parameterName || key]
		const canHaveSquares = parametersThatCanUseSingleDepthSquareBrackets[parameterName]

		const dirtyValue = dirtyQuery.getAll ? dirtyQuery.getAll(key) : dirtyQuery[key]
		const cleanValue = splittable
			? (Array.isArray(dirtyValue) ? dirtyValue : [ dirtyValue ]).map(string => string.split(',')).flat()
			: dirtyValue
		const value = splittable
			? cleanValue
			: cleanValue.length === 1 ? cleanValue[0] : cleanValue

		if (canHaveSquares) {
			query[parameterName] = query[parameterName] || {}
			query[parameterName][parameterMapKey] = value
		} else {
			query[key] = value
		}
		return query
	}, {})
