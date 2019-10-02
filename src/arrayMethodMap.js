'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];

    this.forEach((element, index, arr) => {
      result.push(callback(element, index, arr));
    });

    return result;
  };
}

module.exports = applyCustomMap;
