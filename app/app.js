'use strict';

const angular = require('angular');
const app = angular.module('jufeApp', ['ngRoute']);

// one require statement per sub directory instead of one per file
require('./factories');
require('./controllers');
require('./routes');

