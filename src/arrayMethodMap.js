'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const callbackResult = [];

    for (let i = 0; i < this.length; i++) {
      callbackResult.push(callback(this[i], i, this));
    }

    return callbackResult;
  };
}

module.exports = applyCustomMap;
