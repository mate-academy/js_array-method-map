'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }

    return newArray;
  };
}

module.exports = applyCustomMap;
