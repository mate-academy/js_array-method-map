'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapArr = [];
    for (let index = 0; index < this.length; index++) {
      mapArr[index] = callback(this[index], index, this);
    }
    return mapArr;
  };
}

module.exports = applyCustomMap;
