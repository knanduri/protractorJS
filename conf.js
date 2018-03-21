// conf.js
exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['featureTests/*.test.js'],

    mochaOpts: {
        reporter: "spec",
        slow: 3000,
        enableTimeouts: false
    },

    onPrepare: function() {
        const width = 1800;
        const height = 1400;
        browser.driver.manage().window().setSize(width, height);
    },

    suites: {
        regressionTests: 'featureTests/*.test.js',
    },

    multiCapabilities: [
        {'browserName': process.env.runBrowser,
            'acceptInsecureCerts': true},
],
    args: ['incognito'],
    maxInstances: 2,
    shardTestFiles: true,

    baseUrl: 'https://bws.com.au',
    SELENIUM_PROMISE_MANAGER: false
};