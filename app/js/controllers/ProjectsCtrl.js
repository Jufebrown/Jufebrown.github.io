'use strict';

module.exports = function($scope, $http) {
  
  $http.get('../../assets/data/projects.json')
    .then(function onSuccess(projects) {
      $scope.projects = projects.data.projects;
    });
  
};
