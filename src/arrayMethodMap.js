'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultArr = [];

    for (let i = 0; i < this.length; i++) {
      resultArr[i] = callback(this[i], i, this);
    }
    return resultArr;
  };
}

module.exports = applyCustomMap;
