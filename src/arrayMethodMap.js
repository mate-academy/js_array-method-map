'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArr = [];
    this.forEach((element, i, arr) => newArr.push(callback(element, i, arr)));
    return newArr;
  };
}

module.exports = applyCustomMap;
