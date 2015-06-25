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
    'name': 'Protractor suite tests'
  }]  ,

 // baseUrl: 'http://localhost:8000/app/',
 baseUrl: env.baseUrl,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  },
  directConnect: true
};
