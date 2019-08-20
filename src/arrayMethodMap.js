'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const map = [];
    for (let i = 0; i < this.length; i++) {
      map[i] = callback(this[i], i, this);
    }

    return map;
  };
}

module.exports = applyCustomMap;
