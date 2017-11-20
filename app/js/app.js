'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const ngSanitize = require('angular-sanitize');
const app = angular.module('jufeApp', [ngRoute, ngSanitize]);

// one require statement per sub directory instead of one per file
require('./factories');
require('./controllers');

app.config($routeProvider => {
  // App routes
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectCtrl'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise('/');
});

module.exports = app;