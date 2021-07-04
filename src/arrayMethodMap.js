'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    const mapMethod = [];
    this.forEach((element, index, arr) => {
      mapMethod.push(callback(element, index, arr));
    });
    return mapMethod;
  };
}

module.exports = applyCustomMap;
