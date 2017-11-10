'use strict';

const app = angular.module('Jufe', ['ngRoute']);

app.config(function($routeProvider) {
  // App routes
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/');
});
