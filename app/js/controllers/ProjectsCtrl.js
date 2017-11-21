'use strict';

module.exports = function($scope) {
  $scope.projects = [
    {
      name: 'Aidan\'s Bestial Companions',
      description: 'This is a game I built for my son. It has a front-end built with Angularjs and Materialize. The back end is Nodejs with express and uses a Postgres database with knex and bookshelf for an ORM. The back end is hosted on heroku and the front end is hosted on Github pages.'
    },
    {
      name: 'NSS Cohort 17 website',
      description: 'For our class website I wrote code that checks an api to see what times sunrise and sunset are in Nashville, TN and compares the current time to those values, then displays a daytime or nighttime backdrop on the page. I also made the "underground" graphic at the bottom of the page and wrote the function that shuffles our individual pictures.'
    },
    {
      name: 'Mech Combat',
      description: 'This was my front-end capstone project for Nashville Software School. It is a game based on the old Battletech board game. It uses the phaser.js library and the HTML5 canvas element.'
    }
  ];
};
