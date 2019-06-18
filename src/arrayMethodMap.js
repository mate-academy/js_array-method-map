'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const changedArray = [];
    for (let i = 0; i < this.length; i++) {
      changedArray[i] = callback(this[i], i, this);
    }
    return changedArray;
  };
}

module.exports = applyCustomMap;
