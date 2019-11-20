'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const b = (callback(this[i], i, this));
      result.push(b);
    }
    return result;
  };
}

module.exports = applyCustomMap;
