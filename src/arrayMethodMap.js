'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapArray = [];

    for (let i = 0; i < this.length; i += 1) {
      mapArray.push(callback(this[i], i, this));
    }

    return mapArray;
  };
}

module.exports = applyCustomMap;
