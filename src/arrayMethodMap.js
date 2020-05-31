'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const changed = [];

    for (let i = 0; i < this.length; i++) {
      changed.push(callback(this[i], i, this));
    }

    return changed;
  };
}

// applyCustomFilter();
// console.log([0, 10, 20, 30].filter2(a => a === 10));

module.exports = applyCustomMap;
