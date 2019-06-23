'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArr = [];
    newArr.length = this.length;

    for (let i = 0; i < this.length; i++) {
      newArr[i] = callback(this[i], i, this);
    }

    return newArr;
  };
}

module.exports = applyCustomMap;
