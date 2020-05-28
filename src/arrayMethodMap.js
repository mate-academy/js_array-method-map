'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const mappedArray = [];

    for (let i = 0; i < this.length; i++) {
      mappedArray.push(callback(this[i], i, this));
    }

    return mappedArray;
  };
}

module.exports = applyCustomMap;
