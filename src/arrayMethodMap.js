'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    let index = 0;

    for (const item of this) {
      result.push(callback(item, index, this));
      index++;
    }

    return result;
  };
}

module.exports = applyCustomMap;
