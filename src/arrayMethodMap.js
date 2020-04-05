'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arr = this;
    const result = [];
    let count = 0;

    for (const item of arr) {
      result.push(callback(item, count, arr));
      count++;
    };

    return result;
  };
}

module.exports = applyCustomMap;
