'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arrMap = [];

    for (let i = 0; i < this.length; i++) {
      arrMap.push(callback(this[i], i, this));
    }

    return arrMap;
  };
}
module.exports = applyCustomMap;
