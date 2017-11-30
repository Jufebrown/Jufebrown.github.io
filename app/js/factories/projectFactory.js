'use strict';

module.exports = function($http) {
  return {
    getProjects: function() {
      $http
        .get('../../assets/data/projects.json')
        .then(function onSuccess(data) {
          console.log(data);
          let projects = data.data.projects;
          return projects;
        });
    }
  };
};
