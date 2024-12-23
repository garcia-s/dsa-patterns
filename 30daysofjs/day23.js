/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let obj = {}
    for (i = 0; i < this.length; i++) {
        obj[fn(this[i])] ?
            obj[fn(this[i])].push(this[i]) :
            obj[fn(this[i])] = [this[i]]
    }
    return obj
};

