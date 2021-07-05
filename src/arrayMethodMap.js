'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const mappeddArr = [];

    for (let i = 0; i < this.length; i++) {
      mappeddArr[i] = callback(this[i], i, this);
    }
    return mappeddArr;
  };
}

module.exports = applyCustomMap;
