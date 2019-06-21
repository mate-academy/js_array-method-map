'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr[i] = callback(this[i], i, this);
    }

    return newArr;
  };
}

module.exports = applyCustomMap;
