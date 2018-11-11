/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { S } from "./S";

describe("S", () => {
  it("should invoke a function when the first argument is not null", () => {
    const actual = S(x => x + 1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it("should return the first argument as is if it is null", () => {
    const actual = S(x => x + 1, null);
    const expected = null;
    expect(actual).toBe(expected);
  });

  it("should return the first argument as is if it is undefined", () => {
    const actual = S(x => x + 1, undefined);
    const expected = undefined;
    expect(actual).toBe(expected);
  });
});
