module.exports = function($scope, homeFactory) {
  document.querySelector('.home-nav').focus();
  
  $scope.gridCellsArray = homeFactory.generateGridArray();

  $scope.cellColor = 'blue';

};
