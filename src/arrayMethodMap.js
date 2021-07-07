'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    let result = [];
    this.forEach((el, i) => {
      return result.push(callback(el, i, this));
    });
    return result;
  };
}

module.exports = applyCustomMap;
