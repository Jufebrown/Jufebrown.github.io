'use strict';

module.exports = function() {
  return {
    generateGridArray: function() {
      let gridArray = [];
      let totalCells = 6000;
      for (let i = 0; i < totalCells; i++) {
        gridArray.push(i);
      }
      return gridArray;
    }
  };
};