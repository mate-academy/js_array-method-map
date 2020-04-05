'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const items = this;
    const arr = [];

    for (let i = 0; i < items.length; i++) {
      arr.push(callback(items[i], i, items));
    }

    return arr;
  };
}

module.exports = applyCustomMap;
