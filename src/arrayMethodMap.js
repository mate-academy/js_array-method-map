'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const myMapArray = [];
    for (let i = 0; i < this.length; i++) {
      myMapArray[myMapArray.length] = callback(this[i], i, this);
    }

    return myMapArray;
  };
}

module.exports = applyCustomMap;
