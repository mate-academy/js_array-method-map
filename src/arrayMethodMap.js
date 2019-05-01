'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
      newArray = [...newArray, callback(this[i], i, this)];
    }

    return newArray;
  };
}

module.exports = applyCustomMap;
