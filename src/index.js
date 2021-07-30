const singleDepthSquareBraces = /^(\w+)\[(.+)]$/

const parametersThatCanBeCommaDelimited = {
	fields: true,
	include: true,
	sort: true,
}

const parametersThatCanUseSingleDepthSquareBrackets = {
	fields: true,
}

export default dirtyQuery => Object
	.keys(dirtyQuery)
	.reduce((query, key) => {
		const match = singleDepthSquareBraces.exec(key) || []
		const parameterName = match[1]
		const parameterMapKey = match[2]
		const splittable = parametersThatCanBeCommaDelimited[parameterName || key]
		const value = splittable
			? (
				Array.isArray(dirtyQuery[key])
					? dirtyQuery[key].map(string => string.split(',')).flat()
					: dirtyQuery[key].split(',')
			)
			: dirtyQuery[key]
		const canHaveSquares = parametersThatCanUseSingleDepthSquareBrackets[parameterName]
		if (canHaveSquares) {
			query[parameterName] = query[parameterName] || {}
			query[parameterName][parameterMapKey] = value
		} else {
			query[key] = value
		}
		return query
	}, {})
