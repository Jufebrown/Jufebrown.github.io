'use strict';
 
module.exports = function($scope, homeFactory) {
  $scope.message = homeFactory.hello();

  $scope.gridCells = homeFactory.generateGridCells();
};