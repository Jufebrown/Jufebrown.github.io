'use strict';

module.exports = function($scope, homeFactory) {
  document.querySelector('.home-nav').focus();

  // $scope.gridCells = homeFactory.generateGridCells();

  let canvas = document.getElementById('homeCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
  const ctx = canvas.getContext('2d');
  let raf;

  let square = {
    x: 10,
    y: 10,
    vx: 3,
    vy: 5,
    draw: function() {
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(this.x, this.y, 250, 250);
    }
  };

  $scope.draw = function() {
    if (canvas.getContext) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      square.draw();
      square.x += square.vx;
      square.y += square.vy;
      raf = window.requestAnimationFrame($scope.draw);
    } else {
      /* TODO: put something here for people using old browsers */
      console.log('canvas not supported');
    }
  };

  $scope.draw();
};
