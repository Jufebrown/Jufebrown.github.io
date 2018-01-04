'use strict';

module.exports = function($scope, homeFactory) {
  document.querySelector('.home-nav').focus();

  // $scope.gridCells = homeFactory.generateGridCells();

  $scope.draw = () => {
    let canvas = document.getElementById('homeCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * .8;
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 250, 250);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(80, 80, 250, 250);
    }
  };

  $scope.draw();
};
