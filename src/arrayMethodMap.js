'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const changedItems = [];

    for (let i = 0; i < this.length; i++) {
      changedItems[i] = callback(this[i], i, this);
    }

    return changedItems;
  };
}

module.exports = applyCustomMap;
