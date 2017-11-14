'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const app = angular.module('jufeApp', [ngRoute]);

// one require statement per sub directory instead of one per file
// require('./factories');

require('./controllers');

app.config(($routeProvider) => {
  // App routes
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/');
});

module.exports = app;
