'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const filterElements = [];

    for (let i = 0; i < this.length; i++) {
      filterElements.push(callback(this[i], i, this));
    }

    return filterElements;
  };
}

module.exports = applyCustomMap;
