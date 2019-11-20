'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    let index = 0;
    let mapped;

    for (let i = 0; i < this.length; i++) {
      mapped = callback(this[i], i, this);
      result[index] = mapped;
      index++;
    }

    return result;
  };
}

module.exports = applyCustomMap;
