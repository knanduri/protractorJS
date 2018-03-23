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

    capabilities: {
        'browserName': process.env.runBrowser,
        'acceptInsecureCerts': true,
        chromeOptions: {
            args: ['--disable-gpu', '--no-sandbox', '--window-size=1920x1200', '--incognito', '--headless']
        },
    },

    args: ['--disable-gpu', '--no-sandbox', '--window-size=1920x1200', '--incognito', '--headless'],
    maxInstances: 1,
    shardTestFiles: true,

    directConnect: true,
    baseUrl: 'https://bws.com.au',
    SELENIUM_PROMISE_MANAGER: false
};