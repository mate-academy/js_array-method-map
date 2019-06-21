'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultAttay = [];
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      resultAttay.push(callback(item, index, arr));
    }
    return resultAttay;
  };
}

module.exports = applyCustomMap;
