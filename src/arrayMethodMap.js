'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapedArray = [];

    for (let i = 0; i < this.length; i++) {
      mapedArray[i] = callback(this[i], i, this);
    }

    return mapedArray;
  };
}

applyCustomMap();

const source = [1, 2, 3, 4, 5, 6];

source.map2(x => x * 2);
module.exports = applyCustomMap;
