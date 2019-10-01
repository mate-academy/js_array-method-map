'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const arrCopy = [...this];

    for (let i = 0; i < arrCopy.length; i++) {
      arrCopy[i] = callback(arrCopy[i], i, this);
    }

    return arrCopy;
  };
}

module.exports = applyCustomMap;
