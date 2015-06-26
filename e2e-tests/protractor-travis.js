var env = require('./environment.js');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  // capabilities: {
  //  'browserName': 'chrome'
  //}



  multiCapabilities:[

      {
        'browserName': 'chromium-browser',
        'chromeOptions': {
          'args': ['--no-sandbox', '--test-type=browser']
        },
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'chromium-browser suite tests'
      }
    ],



  // baseUrl: 'http://localhost:8000/app/',
  baseUrl: env.baseUrl,

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    defaultTimeoutInterval: 90000
  }
};


