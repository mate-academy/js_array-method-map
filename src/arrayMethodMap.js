'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const modifiedArray = [];

    for (let i = 0; i < this.length; i++) {
      modifiedArray.push(callback(this[i], i, this));
    }

    return modifiedArray;
  };
}

module.exports = applyCustomMap;
