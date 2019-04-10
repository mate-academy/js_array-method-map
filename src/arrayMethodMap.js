'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const items = this;
    const resultItems = [];

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let newItem = callback(item, i, items);

      resultItems[i] = newItem;
    }
    return resultItems;
  };
}

module.exports = applyCustomMap;
