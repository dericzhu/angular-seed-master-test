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
    'browserName': (process.env.TEST_BROWSER_NAME),
    'version': (process.env.TEST_BROWSER_VERSION || 'ANY')
  },





  // baseUrl: 'http://localhost:8000/app/',
  baseUrl: env.baseUrl,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  }
};


