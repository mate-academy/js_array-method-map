'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const array = [];

    for (let i = 0; i < this.length; i++) {
      array[array.length] = callback(this[i], i, this);
    }

    return array;
  };
}

module.exports = applyCustomMap;
