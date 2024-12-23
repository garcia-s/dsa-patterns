/**
 * @param {Object|Array} obj
 * @return {boolean}
 */



//Arrays are objects too in javascript since it's not a real language
//I guess it makes sense from the perspective that arrays are really ArrayLists
var isEmpty = function (obj) {
    return Object.keys(obj).length == 0
};
