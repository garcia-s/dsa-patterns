/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (obj == null || typeof obj != "object") return obj;
    const cmpact = {}


    for (const key in obj) {
        const val = compactObject(obj[key])
        if (Boolean(val)) cmpact[key] = val
    }
    return Array.isArray(obj) ? Object.values(cmpact) : cmpact
};

