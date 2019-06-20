'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
  };
}

module.exports = applyCustomMap;
