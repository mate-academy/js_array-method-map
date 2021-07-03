'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultMapArray = [];

    for (let i = 0; i < this.length; i++) {
      resultMapArray[i] = callback(this[i], i, this);
    }

    return resultMapArray;
  };
}

module.exports = applyCustomMap;
