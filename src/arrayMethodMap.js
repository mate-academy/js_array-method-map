'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const modifArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        modifArr.push(callback(this[i], i, this));
      }
    }
    return modifArr;
  };
}

module.exports = applyCustomMap;
