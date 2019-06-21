'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];
    const arr = this;
    arr.forEach((item, index) => {
      result.push(callback(arr[index], index, arr));
    });
    return result;
  };
}

module.exports = applyCustomMap;
