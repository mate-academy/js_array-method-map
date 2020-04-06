'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const resArr = [];

    for (let i = 0; i < this.length; i++) {
      const resItem = callback(this[i], i, this);

      resArr.push(resItem);
    }

    return resArr;
  };
}

module.exports = applyCustomMap;
