'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  Array.prototype.map2 = function(callback) {
    const mapResults = [];

    for (let i = 0; i < this.length; i++) {
      mapResults[i] = callback(this[i], i, this);
    }
    return mapResults;
  };
}

module.exports = applyCustomMap;
