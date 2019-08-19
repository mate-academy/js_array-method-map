'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapedArray = [];

    for (let i = 0; i < this.length; i++) {
      mapedArray.push(callback(this[i], i, this));
    }
    return mapedArray;
  };
}

module.exports = applyCustomMap;
