/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n <= 0) return arr
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            res.push(arr[i])
            continue
        }
        res.push(...flat(arr[i], n - 1))
    }

    return res
};

