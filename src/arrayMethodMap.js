'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const value = [];
    for (let i = 0; i < this.length; i++) {
      value[i] = callback(this[i], i, this);
    };

    return value;
  };
}

module.exports = applyCustomMap;
