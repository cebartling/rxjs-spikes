'use strict';

var path = require('path');
var conf = require('./gulp/conf');
var _ = require('lodash');
var wiredep = require('wiredep');

function listFiles() {
    var wiredepOptions = _.extend({}, conf.wiredep, {
        dependencies: true,
        devDependencies: true
    });

    return wiredep(wiredepOptions).js
        .concat([
            path.join(conf.paths.tmp, '/serve/app/**/*.module.js'),
            path.join(conf.paths.tmp, '/serve/app/**/*.js'),
            path.join(conf.paths.tests, '/**/*.js'),
            path.join(conf.paths.src, '/**/*.spec.js'),
            path.join(conf.paths.src, '/**/*.mock.js'),
            path.join(conf.paths.src, '/**/*.html')
        ]);
}

module.exports = function (config) {

    var configuration = {
        files: listFiles(),
        singleRun: true,
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine-html-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    };

    config.set(configuration);
};
