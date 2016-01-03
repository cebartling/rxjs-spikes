'use strict';

// Karma configuration
// http://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {

    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/lodash/lodash.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-h-sweetalert/dist/ngSweetAlert.js',
            'bower_components/angular-toastr/dist/angular-toastr.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            'bower_components/moment/moment.js',
            'bower_components/sweetalert/dist/sweetalert-dev.js',
            'bower_components/restangular/dist/restangular.js',
            'bower_components/angular-cache/dist/angular-cache.js',
            'bower_components/angular-toastr/dist/angular-toastr.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/ng-form-group/index.js',
            'src/app/**/*.module.coffee',
            'src/app/index.*.coffee',
            'src/app/**/*.coffee',
            'tests/*.js',
            'src/app/**/*.html'
        ],
        exclude: [],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'src/app/**/!(*.spec).coffee': ['coffee', 'coverage'],
            'src/app/**/*.spec.coffee': ['coffee'],
            'src/**/*.html': ['ng-html2js']
        },
        port: 9867,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        singleRun: false,
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            moduleName: 'exchangeWeb'
        },
        coffeePreprocessor: {
            options: {
                bare: true,
                sourceMap: true
            },
            transformPath: function(path) {
                return path.replace(/\.coffee$/, '.js')
            }
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        plugins: [
            'karma-coffee-preprocessor',
            'karma-coverage',
            'karma-jasmine-html-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ]
    });
};
