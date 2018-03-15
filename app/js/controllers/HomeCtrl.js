module.exports = function ($scope, homeFactory, $timeout, $animate) {
  document.querySelector('.home-nav').focus();

  $scope.gridCellsArray = homeFactory.generateGridArray();

  $timeout(() => {
    $scope.cellColor = 'blue';
  }, 50);

  $timeout(() => {
    $scope.cellColor = 'green';
  }, 5000);
};
