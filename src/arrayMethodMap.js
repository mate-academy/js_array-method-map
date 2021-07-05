'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    let count = 0;
    const mapedArray = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined) {
        mapedArray[count] = callback(this[i], i, this);
        count++;
      }
    }

    return mapedArray;
  };
}

module.exports = applyCustomMap;
