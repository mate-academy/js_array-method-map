'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const results = [];
    this.forEach((value, index, array) => {
      results.push(callback(value, index, array));
    });
    return results;
  };
}

module.exports = applyCustomMap;
