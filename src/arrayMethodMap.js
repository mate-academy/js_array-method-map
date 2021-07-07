'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const finalArray = [];
    for (let i = 0; i < this.length; i++) {
      finalArray[finalArray.length] = callback(this[i], i, this);
    }
    return finalArray;
  };
}

module.exports = applyCustomMap;
