'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i += 1) {
      newArray.push(callback(this[i], i, this));
    }

    return newArray;
  };
}

module.exports = applyCustomMap;
