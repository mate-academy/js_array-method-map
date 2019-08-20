'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultMap2 = [];
    for (let i = 0; i < this.length; i++) {
      resultMap2[i] = callback(this[i], i, this);
    }
    return resultMap2;
  };
}

module.exports = applyCustomMap;
