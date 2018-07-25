# protractorJS
This is a protractor framework with Mocha using webdriverJS

Pre-requisite:
1. Install protractor globally - npm install -g protractor
2. Npm install - all packages inside the package json file
3. Jdk to be installed in the machine
4. webdriver plugin for safari browser - not required for latest safari

Below are the Steps to run the tests

 Step 1
 Run "npm run webdriver" in the terminal - this will trigger the webdriver manager

 Step 2
 Now, In a seperate terminal tab - Run "runBrowser=chrome npm run protractor" - this will run the tests specified in the conf.js which is the configuration file for protractor
 The seperate terminal tab is required because the webdriver session triggered in the Step 1 needs to be maintained for the tests to run
