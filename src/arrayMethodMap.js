'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapresult = [];
    for (let i = 0; i < this.length; i++) {
      mapresult[i] = callback(this[i], i, this);
    }

    return mapresult;
  };
}

module.exports = applyCustomMap;
