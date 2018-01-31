'use strict';

module.exports = function($scope, homeFactory) {
  document.querySelector('.home-nav').focus();

  const canvas = document.getElementById('homeCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
  const ctx = canvas.getContext('2d');

  let square = {
    x: 10,
    y: 10,
    vx: 5,
    vy: 2,
    draw: function() {
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(this.x, this.y, 250, 250);
    }
  };

  let square2 = {
    x: 100,
    y: 100,
    vx: 3,
    vy: 1,
    draw: function() {
      ctx.fillStyle = 'rgb(0, 200, 0)';
      ctx.fillRect(this.x, this.y, 250, 250);
    }
  };

  $scope.draw = function() {
    if (canvas.getContext) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      square.draw();
      square.x += square.vx;
      square.y += square.vy;
      square2.draw();
      square2.x += square2.vx;
      square2.y += square2.vy;
      // window.requestAnimationFrame($scope.draw);
    } else {
      /* TODO: put something here for people using old browsers */
      console.log('canvas not supported');
    }
  };

  window.setInterval($scope.draw, 5);
  // $scope.draw();
};
