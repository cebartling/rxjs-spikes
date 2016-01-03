'use strict';

//var path = require('path');
//var conf = require('./gulp/conf');
//var _ = require('lodash');
//var wiredep = require('wiredep');
var webpack = require('karma-webpack');

//function listFiles() {
//    var wiredepOptions = _.extend({}, conf.wiredep, {
//        dependencies: true,
//        devDependencies: true
//    });
//
//    return wiredep(wiredepOptions).js
//        .concat([
//            path.join(conf.paths.tmp, '/serve/app/**/*.module.js'),
//            path.join(conf.paths.tmp, '/serve/app/**/*.js'),
//            path.join(conf.paths.tests, '/**/*.js'),
//            path.join(conf.paths.src, '/**/*.spec.js'),
//            path.join(conf.paths.src, '/**/*.mock.js'),
//            path.join(conf.paths.src, '/**/*.html')
//        ]);
//}

module.exports = function (config) {

    var configuration = {
        //files: listFiles(),
        singleRun: true,
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine-html-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-webpack'
        ],

        files: [
            // all files ending in "_test"
            'test/*_test.js',
            'test/**/*_test.js'
            // each file acts as entry point for the webpack configuration
        ],

        preprocessors: {
            // add webpack as preprocessor
            'spec/*_spec.js': ['webpack'],
            'spec/**/*_spec.js': ['webpack']
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        }

        //plugins: [
        //    require("karma-webpack")
        //]
    };

    config.set(configuration);
};
