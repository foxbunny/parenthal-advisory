/**
 * (c) 2018, Hajime Yamasaki Vukelic
 * All rights reserved.
 */

import { A } from "./A";

describe("A", () => {
  it("should apply a function", () => {
    const f = (x, y) => x + y;
    const actual = A(f, 1, 2);
    const expected = f(1, 2);
    expect(actual).toBe(expected);
  });
});
