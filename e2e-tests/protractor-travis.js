var env = require('./environment.js');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

 // capabilities: {
  //  'browserName': 'chrome'
  //}

    capabilities: {
    'browserName':
        (process.env.TEST_BROWSER_NAME || 'chrome'),
    'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY')
  },


multiCapabilities: [{
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Protractor smoke tests',
    'version': '41',
    'selenium-version': '2.45.0',
    'chromedriver-version': '2.14'
  }],



 // baseUrl: 'http://localhost:8000/app/',
 baseUrl: env.baseUrl,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  }
};
