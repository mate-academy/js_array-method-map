'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const results = [];

    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, this);

      results.push(result);
    }

    return results;
  };
}

module.exports = applyCustomMap;
