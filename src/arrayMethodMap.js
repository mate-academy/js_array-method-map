'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result[result.length] = callback(this[i], i, this);
    }
    return result;
  };
}

module.exports = applyCustomMap;
