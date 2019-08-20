'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      const currentVal = this[i];
      newArr.push(callback(currentVal, i, this));
    }

    return newArr;
  };
}

module.exports = applyCustomMap;
