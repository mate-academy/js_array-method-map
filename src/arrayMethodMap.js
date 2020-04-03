'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const arr = [];

    if (typeof callback === 'function') {
      for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
      }

      return arr;
    } else {
      return this;
    }
  };
}

module.exports = applyCustomMap;
