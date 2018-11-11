/*
 * (c) 2017-2018, CUBE Team
 * All rights reserved.
 */

module.exports = () => ({
  files: [
    'babel.config.js',
    'package.json',
    'jest.config.js',
    'src/**/*.*',
    '!src/**/*.test.js',
  ],
  tests: [
    'src/**/*.test.js',
  ],
  env: {
    type: 'node',
  },
  testFramework: 'jest',
  debug: true,
});
