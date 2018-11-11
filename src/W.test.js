/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { W } from "./W";

describe("W", () => {
  it("should apply a function to a value", () => {
    const f = x => x + 1;
    const actual = W(2, f);
    const expected = f(2);
    expect(actual).toBe(expected);
  });
});
