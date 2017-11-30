'use strict';

module.exports = function($scope, $http) {
  document.querySelector('.project-nav').focus();

  $http
    .get('../../assets/data/projects.json')
    .then(function onSuccess(projects) {
      $scope.projects = projects.data.projects;
    });
};
