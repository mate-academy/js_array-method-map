'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mappedData = [];

    for (let i = 0; i < this.length; i++) {
      mappedData[mappedData.length] = callback(this[i], i, this);
    }

    return mappedData;
  };
}

module.exports = applyCustomMap;
