/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { isNil } from "./isNil";

describe("isNil", () => {
  [
    [null, true],
    [undefined, true],
    [1, false],
    ["", false],
    [0, false],
    [[], false]
  ].forEach(([x, expected]) => {
    it(`should return ${expected} if value is ${x}`, () => {
      const actual = isNil(x);
      expect(actual).toBe(expected);
    });
  });
});
