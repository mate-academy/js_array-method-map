'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultArr = [];

    for (let i = 0; i < this.length; ++i) {
      resultArr.push(callback(this[i], i, this));
    }

    return resultArr;
  };
}

module.exports = applyCustomMap;
