'use strict';

const app = require('angular').module('jufeApp');

app.factory('homeFactory', require('./homeFactory'));
app.factory('projectFactory', require('./projectFactory'));
