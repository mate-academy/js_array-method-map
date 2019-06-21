'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arrayMethodMap = [];
    for (let elem = 0; elem < this.length; elem++) {
      arrayMethodMap[elem] = callback(this[elem], elem, this);
    }
    return arrayMethodMap;
  };
}

module.exports = applyCustomMap;
