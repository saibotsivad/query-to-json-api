const singleDepthSquareBraces = /^(\w+)\[(.+)\]$/

const parametersThatCanBeCommaDelimited = {
    fields: true,
    include: true,
    sort: true
}

const parametersThatCanUseSingleDepthSquareBrackets = {
    fields: true
}

export default dirtyQuery => Object
    .keys(dirtyQuery)
    .map(original => {
        const match = singleDepthSquareBraces.exec(original) || []
        return {
            original,
            parameterName: match[1],
            parameterMapKey: match[2]
        }
    })
    .map(({ original, parameterName, parameterMapKey }) => {
        const splittable = parametersThatCanBeCommaDelimited[parameterName || original]
        const value = splittable
            ? dirtyQuery[original].split(',')
            : dirtyQuery[original]
        return { parameterName, parameterMapKey, original, value }
    })
    .reduce((query, { parameterName, parameterMapKey, original, value }) => {
        const canHaveSquares = parametersThatCanUseSingleDepthSquareBrackets[parameterName]
        if (canHaveSquares) {
            query[parameterName] = query[parameterName] || {}
            query[parameterName][parameterMapKey] = value
        } else {
            query[original] = value
        }
        return query
    }, {})
