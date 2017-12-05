module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      'dist/app.js': ['js/app.js']
    },
    sass: {
      dist: {
        files: {
          'stylesheets/main.css': 'sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep')
    .filter('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['sass', 'browserify', 'watch']);
};
