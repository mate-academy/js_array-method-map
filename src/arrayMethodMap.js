'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const filtered = [];
    for (let i = 0; i < this.length; i++) {
      filtered[i] = callback(this[i], i, this);
    }
    return filtered;
  };
}

module.exports = applyCustomMap;
