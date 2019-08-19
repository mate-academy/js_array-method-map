'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultsArray = [];

    for (let i = 0; i < this.length; i++) {
      resultsArray.push(callback(this[i], i, this));
    }

    return resultsArray;
  };
}

module.exports = applyCustomMap;
