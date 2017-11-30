'use strict';

module.exports = function($scope) {
  $scope.setHomeLinkActive = () => {
    document.querySelector('.home-nav').focus();
  };
};
