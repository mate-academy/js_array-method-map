'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
      const newelement = callback(this[i], i, this);

      filtered[filtered.length] = newelement;
    }

    return filtered;
  };
}

module.exports = applyCustomMap;
