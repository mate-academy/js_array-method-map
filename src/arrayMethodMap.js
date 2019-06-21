'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resArray = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = this[i];
      resArray[resArray.length] = callback(item, i, arr);
    }
    return resArray;
  };
}

module.exports = applyCustomMap;
