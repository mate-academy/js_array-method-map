'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const finalArr = [];
    this.forEach((e, index, arr) => finalArr.push(callback(e, index, arr)));

    return finalArr;
  };
}

module.exports = applyCustomMap;
