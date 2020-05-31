'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const processed = [];

    for (let i = 0; i < this.length; i++) {
      processed[processed.length] = callback(this[i], i, this);
    }

    return processed;
  };
}

module.exports = applyCustomMap;
