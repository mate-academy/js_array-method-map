'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const output = [];

    for (let i = 0; i < this.length; i++) {
      output.push(callback(this[i], i, this));
    }

    return output;
  };
}

module.exports = applyCustomMap;
