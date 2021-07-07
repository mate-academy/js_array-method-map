'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const resultArr = [];

    for (let i = 0; i < this.length; i++) {
      const resultItem = callback(this[i], i, this);

      resultArr.push(resultItem);
    }

    return resultArr;
  };
}

module.exports = applyCustomMap;
