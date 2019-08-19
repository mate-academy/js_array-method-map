'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const results = [];

    for (let i = 0; i < this.length; i++) {
      results.push(callback(this[i], i, this));
    }

    return results;
  };
}

module.exports = applyCustomMap;
