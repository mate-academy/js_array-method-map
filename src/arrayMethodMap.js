'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const rest = [];

    for (let i = 0; i < this.length; i++) {
      rest.push(callback(this[i], i, this));
    }

    return rest;
  };
}

module.exports = applyCustomMap;
