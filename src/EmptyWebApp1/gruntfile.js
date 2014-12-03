/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        uglify: {
            options: {
                banner: '/* This is my minified app, built <%= grunt.template.today() %> */'
            },
            dist: {
                src: ['wwwroot/calculator/*.js'],
                dest: 'wwwroot/calculator/calculator.min.js'
            },
            addsub: {
                src: ['wwwroot/calculator/add.js', 'wwwroot/calculator/subtract.js'],
                dest: 'wwwroot/calculator/addsub.min.js'
            }
        //},
        //watch: {
        //    files: ['wwwroot/calculator/*.js'],
        //    tasks: ['uglify:dist']
        }
    });

    grunt.registerTask("default", [
        "uglify:dist",
        "bower:install"
    ]);

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks('grunt-contrib-watch');

};