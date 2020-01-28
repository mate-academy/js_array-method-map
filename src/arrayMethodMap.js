'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      result[i] = callback(this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomMap;
