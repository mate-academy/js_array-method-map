'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArr = [];
    for (const [index] of this.entries()) {
      if (callback(this[index], index, this)) {
        newArr.push(callback(this[index], index, this));
      }
    }
    return newArr;
  };
}

module.exports = applyCustomMap;
