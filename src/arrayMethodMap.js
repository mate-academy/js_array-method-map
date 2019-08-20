'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapResult = [];
    for (let i = 0; i < this.length; i++) {
      mapResult[i] = callback(this[i], i, this);
    }

    return mapResult;
  };
}

module.exports = applyCustomMap;
