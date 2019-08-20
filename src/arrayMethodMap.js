'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const arrOfMap = [];
    for (let i = 0; i < this.length; i++) {
      arrOfMap.push(callback(this[i], i, this));
    }

    return arrOfMap;
  };
}

module.exports = applyCustomMap;
