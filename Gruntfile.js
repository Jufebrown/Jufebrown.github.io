module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      'app/dist/app.js': ['app/js/app.js']
    },
    sass: {
      dist: {
        files: {
          'app/stylesheets/main.css': 'app/sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['app/js/*.js'],
        tasks: ['browserify']
      },
      sass: {
        files: ['app/sass/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep')
    .filter('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['sass', 'browserify', 'watch']);
};
