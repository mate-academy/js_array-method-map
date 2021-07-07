'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapElements = [];

    for (let i = 0; i < this.length; i++) {
      mapElements.push(callback(this[i], i, this));
    }

    return mapElements;
  };
}

module.exports = applyCustomMap;
