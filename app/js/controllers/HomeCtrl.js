'use strict';

module.exports = function($scope, homeFactory) {
  document.querySelector('.home-nav').focus();
  
  $scope.gridCells = homeFactory.generateGridCells();
};
