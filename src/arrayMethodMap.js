'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const changed = [];

    for (let i = 0; i < this.length; i++) {
      changed.push(callback(this[i], i, this));
    }

    return changed;
  };
}

module.exports = applyCustomMap;
