'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      const mapped = callback(this[i], i, this);
      arr[arr.length] = mapped;
    }
    return arr;
  };
}

module.exports = applyCustomMap;
