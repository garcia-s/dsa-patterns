
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
//
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
//
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.



/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(...args)
    var c = setInterval(() => fn(...args), t);
    return () => clearInterval(c)
};
