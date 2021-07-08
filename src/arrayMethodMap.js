'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;

      result[result.length] = (callback(item, index, arr));
    }

    return result;
  };
}

module.exports = applyCustomMap;
