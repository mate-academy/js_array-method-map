'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    return this.reduce(function(elem, item, index, array) {
      return elem.concat([ callback(item, index, array) ]);
    }, []);
  };
}

module.exports = applyCustomMap;
