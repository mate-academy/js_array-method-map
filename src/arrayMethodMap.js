'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    let result = [];
    this.filter((el, i) => {
      return result.push(callback(el, i, this));
    });
    return result;
  };
}

module.exports = applyCustomMap;
