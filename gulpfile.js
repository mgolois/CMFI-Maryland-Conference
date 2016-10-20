/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/// <binding BeforeBuild='build' Clean='clean' ProjectOpened='install' />
var gulp = require('gulp');
var del = require('del');
var install = require('gulp-install');
var shell = require('gulp-shell');
var glob = require('glob');

var paths = {
    webroot: './assets/',
    node_modules: './node_modules/'
};
paths.libDest = paths.webroot + 'js/';
paths.StyleDest = paths.webroot + 'css/';

// Copies the specified libraries to the wwwroot folder.
gulp.task('copy:libs', function () {
    return gulp.src([
        paths.node_modules + 'jquery/dist/jquery.min.js',
        paths.node_modules + 'bootstrap/dist/js/bootstrap.min.js',
        paths.node_modules + 'smooth-scroll/dist/js/smooth-scroll.min.js',
        paths.node_modules + 'bootstrap-multiselect/dist/bootstrap-multiselect.js',
        paths.node_modules + 'toastr/build/toastr.min.js'
    ], { base: paths.node_modules }).pipe(gulp.dest(paths.libDest));
});

gulp.task('copy:css', function () {
   return gulp.src([
       paths.node_modules + 'bootstrap/dist/css/bootstrap.min.css',
       paths.node_modules + 'ionicons/css/ionicons.min.css',
       paths.node_modules + 'toastr/build/toastr.min.css',
       paths.node_modules + 'bootstrap-multiselect/dist/bootstrap-multiselect.css'
   ], { base: paths.node_modules }).pipe(gulp.dest(paths.StyleDest));
});

// Always declare a default task.['copy:libs', 'copy:css']
gulp.task('default', ['copy:libs', 'copy:css']);