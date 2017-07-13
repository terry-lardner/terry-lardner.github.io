// Karma configuration
module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'dist/lib.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/app.min.js',
            'components/**/*.html',
            'test/unit/**/*.spec.js'
        ],
        reporters: [
            'progress'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        reporters: ['kjhtml'], 
        preprocessors: {   
            'components/**/*.html': 'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates' 
        }
    });
};
