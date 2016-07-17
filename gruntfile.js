module.exports = function(grunt){
	"use strict";
	
require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
			
				watch: {
						options: {
						livereload: true,
						},
						html: {
							files: ['index.html'],
							tasks: []
						},
						js: {
							files: ['js/*.js'],
							tasks: []
						},
						css: {
							files: ['styles/*.css'],
							tasks: []
						}
				},
			
				uglify: {
					my_target: {
						files: [{
								expand: true,
								cwd: 'js/',
								src: '*.js',
								dest: 'release/js'
						}]
					}
				},
			
				cssmin: {
					target: {
						files: [{
							expand: true,
							cwd: 'styles/',
							src: ['*.css', '!*.min.css'],
							dest: 'release/css',
							ext: '.min.css'
						}]
					}
				}				
				
    });
		
	
    grunt.registerTask('default', []);
		grunt.registerTask('startDev', ['watch']);
		grunt.registerTask('compress', ['uglify', 'cssmin']);
};
