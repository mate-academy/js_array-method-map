'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mappedArray = [];

    for (let i = 0; i < this.length; i++) {
      mappedArray[i] = callback(this[i], i, this);
    }

    return mappedArray;
  };
}

module.exports = applyCustomMap;
