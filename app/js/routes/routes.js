'use strict';

module.exports = ($routeProvider) => {
  // App routes
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/');
};
