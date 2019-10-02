'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapArr = [];

    for (let i = 0; i < this.length; i++) {
      mapArr.push(callback(this[i], i, this));
    }

    return mapArr;
  };
}

module.exports = applyCustomMap;
