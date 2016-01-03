var webpack = require('webpack');

var configSettings = {
    "normal": {},
    "uglified": {
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
    }
};

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'spec/spec_contexts.coffee'
        ],
        preprocessors: {
            'spec/*': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ["", ".js", ".coffee"]
            },
            module: {
                loaders: [
                    { spec: /\.coffee$/, loader: "coffee-loader" }
                ]
            }
        },
        webpackMiddleware: {
            stats: {
                colors: true
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,


        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
        plugins: [
            require("karma-jasmine"),
            require("karma-jasmine-html-reporter"),
            require("karma-chrome-launcher"),
            require("karma-phantomjs-launcher"),
            require("karma-webpack")
        ]
    });
};






//module.exports = function (config) {
//
//    var configuration = {
//        //files: listFiles(),
//        singleRun: true,
//        autoWatch: false,
//        frameworks: ['jasmine'],
//        browsers: ['PhantomJS'],
//        plugins: [
//            'karma-jasmine-html-reporter',
//            'karma-chrome-launcher',
//            'karma-phantomjs-launcher',
//            'karma-jasmine',
//            'karma-webpack'
//        ],
//
//        files: [
//            // all files ending in "_test"
//            'src/*_spec.coffee',
//            'src/**/*_spec.coffee'
//            // each file acts as entry point for the webpack configuration
//        ],
//
//        preprocessors: {
//            // add webpack as preprocessor
//            'src/*_spec.coffee': ['webpack'],
//            'src/**/*_spec.coffee': ['webpack']
//        },
//
//        webpack: {
//            // karma watches the test entry points
//            // (you don't need to specify the entry option)
//            // webpack watches dependencies
//
//            // webpack configuration
//        },
//
//        webpackMiddleware: {
//            // webpack-dev-middleware configuration
//            // i. e.
//            noInfo: true
//        }
//
//        //plugins: [
//        //    require("karma-webpack")
//        //]
//    };
//
//    config.set(configuration);
//};
