'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var debug = require('gulp-debug');


gulp.task('deploy-fonts', function () {
    return gulp.src([conf.paths.dist + '/fonts/*.{otf,eot,svg,ttf,woff,woff2}'])
        //.pipe(debug({title: 'FONTS:'}))
        .pipe(gulp.dest(conf.paths.rails + '/public/fonts/'));
});

gulp.task('deploy-vendor-js', function () {
    return gulp.src([conf.paths.dist + '/**/vendor*.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(conf.paths.rails + '/app/assets/javascripts/restaurant-portal/'));
});

gulp.task('deploy-app-js', function () {
    return gulp.src([conf.paths.dist + '/**/app*.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(conf.paths.rails + '/app/assets/javascripts/restaurant-portal/'));
});

gulp.task('deploy-vendor-css', function () {
    return gulp.src([conf.paths.dist + '/**/vendor*.css'])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(conf.paths.rails + '/app/assets/stylesheets/restaurant-portal/'));
});

gulp.task('deploy-app-css', function () {
    return gulp.src([conf.paths.dist + '/**/app*.css'])
        .pipe(concat('main.css'))
        .pipe(gulp.dest(conf.paths.rails + '/app/assets/stylesheets/restaurant-portal/'));
});

gulp.task('copy-to-rails', function (callback) {
    runSequence('build', [
        'deploy-fonts',
        'deploy-vendor-js',
        'deploy-app-js',
        'deploy-vendor-css',
        'deploy-app-css'
    ], callback);
});
