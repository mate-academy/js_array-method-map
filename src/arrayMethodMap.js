'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback && callback(this[i], i, this)) {
        result.push(callback(this[i], i, this));
      }
    }

    return result;
  };
}

module.exports = applyCustomMap;
