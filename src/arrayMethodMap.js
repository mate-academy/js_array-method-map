'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultArr = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      resultArr[index] = callback(item, index, arr);
    }
    return resultArr;
  };
}

module.exports = applyCustomMap;
