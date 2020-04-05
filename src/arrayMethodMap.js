'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const arr = this;
    const res = [];

    for (let i = 0; i < arr.length; i++) {
      res.push(callback(arr[i], i, arr));
    }

    return res;
  };
}

module.exports = applyCustomMap;
