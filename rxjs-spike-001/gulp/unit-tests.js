'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

function runTests(singleRun, done) {
    var config = {
        configFile: path.join(__dirname, '/../karma.conf.js'),
        singleRun: singleRun,
        autoWatch: !singleRun
    };
    var server = new karma.Server(config, done);
    server.start();
}

function runTestsInDebug(done) {
    var config = {
        configFile: path.join(__dirname, '/../karma.conf.js'),
        singleRun: false,
        autoWatch: false,
        reporters: ['html'],
        browsers: ['Chrome']
    };
    var server = new karma.Server(config, done);
    server.start();
}

gulp.task('test:debug', ['scripts'], function (done) {
    runTestsInDebug(done);
});

gulp.task('test', ['scripts'], function (done) {
    runTests(true, done);
});

gulp.task('test:auto', ['watch'], function (done) {
    runTests(false, done);
});
