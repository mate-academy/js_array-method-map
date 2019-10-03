'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newArray = [];

    this.forEach((item, index, arr) => {
      newArray.push(callback(item, index, arr));
    });
    return newArray;
  };
}

module.exports = applyCustomMap;
