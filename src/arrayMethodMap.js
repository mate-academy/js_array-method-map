'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapArr = [];
    for (let i = 0; i < this.length; i++) {
      mapArr[i] = callback(this[i], i, this);
    }
    return mapArr;
  };
}

module.exports = applyCustomMap;
