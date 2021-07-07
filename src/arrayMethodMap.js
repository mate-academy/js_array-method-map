'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.customPush = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }

    return this.length;
  };

  [].__proto__.map2 = function(callback) {
    const newArr = [];

    for (let i = 0; i <= this.length - 1; i++) {
      newArr.customPush(callback(this[i], i, this));
    }

    return newArr;
  };
}

module.exports = applyCustomMap;
