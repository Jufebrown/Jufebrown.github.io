'use strict';

module.exports = function() {
  return {
    generateGridCells: function() {
      let gridString = '';
      let cols = 100;
      let rows = 60;
      let totalCells = cols * rows;
      for (let i = 0; i < totalCells; i++) {
        gridString += `<div class="led-pix" ng-show='ledPixel${i}'></div>`;
      }
      return gridString;
    }
    
  };
};