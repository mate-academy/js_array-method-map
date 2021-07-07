'use strict';

/**
 * Implement method Map
 */

function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const mappedArr = [];
    for (let i = 0; i < this.length; i++) {
      mappedArr.push(callback(this[i], i, this));
    }

    return mappedArr;
  };
}

module.exports = applyCustomMap;
