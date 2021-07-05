'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const res = [];

    for (let i = 0; i < this.length; i++) {
      res[res.length] = callback(this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomMap;
