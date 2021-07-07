'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newMapArr = [];

    for (let i = 0; i < this.length; i++) {
      newMapArr.push(callback(this[i], i, this));
    }

    return newMapArr;
  };
}

module.exports = applyCustomMap;
