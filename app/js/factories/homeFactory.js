'use strict';

module.exports = function() {
  return {
    hello: function () {
      return 'hello';
    },

    generateGridCells: function () {
      let gridString = '';
      let cols = 3;
      let rows = 3;
      let totalCells = cols * rows;
      for (let i = 0; i < totalCells; i++) {
        gridString += `<div class="item">${i}</div>`;
      }
      return gridString;
    }
  };
};
