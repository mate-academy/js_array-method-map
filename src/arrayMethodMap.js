'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arrResult = [];

    for (let i = 0; i < this.length; i++) {
      arrResult[i] = callback(this[i], i, this);
    }

    return arrResult;
  };
}

module.exports = applyCustomMap;
