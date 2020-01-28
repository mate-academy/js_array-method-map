'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArr[newArr.length] = callback(this[i], i, this);
      }
    }

    return newArr;
  };
}

module.exports = applyCustomMap;
