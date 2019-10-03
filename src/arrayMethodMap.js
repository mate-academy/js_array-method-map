'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const modifiedArr = [];
    for (let i = 0; i < this.length; i++) {
      modifiedArr.push(callback(this[i], i, this));
    }
    return modifiedArr;
  };
}

module.exports = applyCustomMap;
