'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    if (typeof callback !== 'function') {
      return;
    }

    const newThis = [];

    for (let i = 0; i < this.length; i++) {
      newThis[newThis.length] = callback(this[i], i, this);
    }

    return newThis;
  };
}

module.exports = applyCustomMap;
