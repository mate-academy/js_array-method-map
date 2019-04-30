'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    // write code here
    let arr = [];
    console.log(this);
    this.forEach(function(el, i, thisArr) {
      arr.push(callback(el, i, thisArr));
    });
    console.log(arr);
    return arr;
  };
}

module.exports = applyCustomMap;
