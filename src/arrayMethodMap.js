'use strict';
/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapped = [];
    for (let i = 0; i < this.length; i++) {
      mapped[i] = callback(this[i], i, this);
    };
    return mapped;
  };
}
module.exports = applyCustomMap;