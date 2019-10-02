'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arr = [];
    this.forEach((item, index, array) => arr
      .push(callback(item, index, array)));
    return arr;
  };
}

module.exports = applyCustomMap;
