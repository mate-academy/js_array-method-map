'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
      resultArray[resultArray.length] = callback(this[i], i, this);
    }

    return resultArray;
  };
}

module.exports = applyCustomMap;
