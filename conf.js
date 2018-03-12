// conf.js
exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['featureTests/productSearch.test.js'],

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
        landingPage: 'featureTests/*.test.js',
    },


    SELENIUM_PROMISE_MANAGER: false,
};