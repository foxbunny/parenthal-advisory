/**
 * (c) 2018, Hajime Yamasaki Vukelic
 * All rights reserved.
 */

module.exports = {
  presets: [["@babel/env"]],
  plugins: ["transform-es2015-modules-umd"],
  env: {
    test: {
      plugins: [],
    }
  }
};
