'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {

    const result = [];

    this.forEach( (element, i, arr) => {
      result.push(callback(element, i, arr));
    });

    return result;
  };
}

module.exports = applyCustomMap;
