/**
 * (c) 2018, Hajime Yamasaki Vukelic
 * All rights reserved.
 */

import { P } from "./P";

describe("P", () => {
  it("should bind a function", () => {
    const f = (x, y) => x + y;
    const actual = P(f, 1)(2);
    const expected = f.bind(null, 1)(2);
    expect(actual).toBe(expected);
  });
});
