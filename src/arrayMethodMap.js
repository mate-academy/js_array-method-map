'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    let o = 0;
    const mapped = [];

    for (let i = 0; i < this.length; i++) {
      mapped[o] = callback(this[i], i, this);
      o++;
    }

    return mapped;
  };
}

module.exports = applyCustomMap;
