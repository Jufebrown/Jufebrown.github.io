'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
const ngSanitize = require('angular-sanitize');
const ngAnimate = require('angular-animate');
const uiBootstrap = require('angular-ui-bootstrap');

const app = angular.module('jufeApp', [
  ngRoute,
  ngSanitize,
  ngAnimate,
  uiBootstrap
]);

// one require statement per sub directory instead of one per file
require('./factories');
require('./controllers');

app.config($routeProvider => {
  // App routes
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise('/home');
});

module.exports = app;
