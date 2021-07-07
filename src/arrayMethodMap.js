'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arrMap2 = [];
    this.forEach(
      (item, index, arr) => arrMap2.push(callback(item, index, arr))
    );

    return arrMap2;
  };
}

module.exports = applyCustomMap;
