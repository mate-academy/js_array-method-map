'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const callbackArr = [];

    if (typeof callback !== 'function') {
      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        callbackArr.push(callback(this[i], i, this));
      }

      return callbackArr;
    }
  };
}

module.exports = applyCustomMap;
