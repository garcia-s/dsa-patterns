/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((solve, rejc) => {
        const res = [...functions]
        let solved = 0
        for (let i = 0; i < res.length; i++) {
            res[i].call().catch(rejc)
                .then((v) => {
                    res[i] = v
                    solved += 1
                    if (solved == res.length) solve(res)
                })
        }
    })
};

