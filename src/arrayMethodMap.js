'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const newMapedArrey = [];
    for (let i = 0; i < this.length; i++) {
      newMapedArrey.push(callback(this[i], i, this));
    }
    return newMapedArrey;
  };
}

module.exports = applyCustomMap;
