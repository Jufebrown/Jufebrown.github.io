'use strict';
 
module.exports = function($scope, homeFactory) {
  $scope.gridCells = homeFactory.generateGridCells();
};