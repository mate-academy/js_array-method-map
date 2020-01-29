'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapItems = [];

    for (let i = 0; i < this.length; i++) {
      mapItems[i] = callback(this[i], i, this);
    }

    return mapItems;
  };
}

module.exports = applyCustomMap;
