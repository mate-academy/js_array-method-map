'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const result = [];
    const length = this.length;
    for (let i = 0; i < length; i++) {
      result[result.length] = callback(this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomMap;
