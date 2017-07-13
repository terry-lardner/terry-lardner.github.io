// Karma configuration
module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: [
            'jasmine'
        ],

        files: [
            'dist/lib.min.js',
            'dist/app.min.js',

            'node_modules/angular-mocks/angular-mocks.js',
            'test/unit/*.spec.js'
        ],
        reporters: [
            'progress'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        reporters: ['kjhtml']
    });
};
