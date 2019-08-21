'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr[newArr.length] = this[i];
      newArr[newArr.length - 1] = callback(this[i], i, this);
    }
    return newArr;
  };
};

module.exports = applyCustomMap;
