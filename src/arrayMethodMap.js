'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const returnArray = [];

    for (let i = 0; i < this.length; i++) {
      returnArray.push(callback(this[i], i, this));
    }

    return returnArray;
  };
}

module.exports = applyCustomMap;
