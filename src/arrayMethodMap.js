'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    if (this.length === 0) {
      return [];
    }

    const afterMethodMap = [];

    for (let i = 0; i < this.length; i++) {
      afterMethodMap.push(callback(this[i], i, this));
    }

    return afterMethodMap;
  };
}

module.exports = applyCustomMap;
