/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { __, B } from "./B";

describe("B", () => {
  it("should partially apply with placeholders", () => {
    const f = (x, y, z) => x + y * z;
    const actual = B(f, 1, __, 3)(2);
    const expected = 7;
    expect(actual).toBe(expected);
  });

  it("should pass any surplus arguments", () => {
    const f = (x, y, z) => x + y * z;
    const actual = B(f, __, 2)(1, 3);
    const expected = 7;
    expect(actual).toBe(expected);
  });

  it("cannot fill in missing arguments", () => {
    const f = (a, b, c, d) => a + b + c + d;
    const actual = B(f, "a", __, __, "d")("b");
    const expected = "abundefinedd";
    expect(actual).toBe(expected);
  });
});
