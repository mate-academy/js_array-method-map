'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    this.forEach((currentValue, index, array) => {
      result.push(callback(currentValue, index, array));
    });
    return result;
  };
}

module.exports = applyCustomMap;
