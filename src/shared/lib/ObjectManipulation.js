/* Functions related to Object manipulation */

/*
 * Rename keys in flat dictionary. Keep old keys if not in keyMap.
 */
export function renameKeys(dict, keyMap) {
    return _.reduce(dict, function(newDict, val, oldKey) {
        var newKey = keyMap[oldKey]
        if (newKey) {
            newDict[newKey] = val 
        } else {
            newDict[oldKey] = val 
        }
        return newDict
    }, {})
}

/*
 * Return new dict w/o given keys (only works on flat dicts)
 */
export function dropKeys(dict, keys) {
    return _.reduce(dict, function(newDict, val, key) {
        if (keys.indexOf(key) === -1) {
            newDict[key] = val
        }
        return newDict
    }, {})
}