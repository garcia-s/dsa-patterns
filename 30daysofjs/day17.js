


var TimeLimitedCache = function () {
    this.cache = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const val = this.cache[key];
    if (val) clearTimeout(val.ref)
    this.cache[key] = {
        val: value,
        ref: setTimeout(() => {
            delete this.cache[key]
        }, duration)
    }
    return val != undefined
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */

TimeLimitedCache.prototype.get = function (key) {
    return this.cache[key] ? this.cache[key].val : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.cache).length
};
