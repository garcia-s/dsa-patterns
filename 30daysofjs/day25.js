/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const obj = {}

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i].id] ??= arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        for (const key in arr2[i]) {
            obj[arr2[i].id] ??= {}
            obj[arr2[i].id][key] = arr2[i][key]
        }
    }
    return Object.values(obj)
};
