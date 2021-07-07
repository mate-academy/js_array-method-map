'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr.push(callback(this[i], i, this));
      }
    }

    return arr;
  };
}

module.exports = applyCustomMap;
