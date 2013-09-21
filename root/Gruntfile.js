'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: '<%= watch.gruntfile.files %>'
      },
      lib: {
        src: '<%= watch.lib.files %>'
      },
      test: {
        src: '<%= watch.test.files %>'
      },
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: ['lib/**/*.js'],
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: ['test/**/*.js'],
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
