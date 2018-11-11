/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { eq } from "./eq";

describe("eq", () => {
  it("should return true if two values are equal", () => {
    const actual = eq(1, 1);
    const expected = true;
    expect(actual).toBe(expected);
  });

  it("should return false if two values are not equal", () => {
    const actual = eq(1, 2);
    const expected = false;
    expect(actual).toBe(expected);
  });

  it("should not return true for values that are not identical", () => {
    const actual = eq({}, {});
    const expected = false;
    expect(actual).toBe(expected);
  });
});
