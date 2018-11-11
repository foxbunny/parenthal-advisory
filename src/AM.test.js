/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { AM } from "./AM";

describe("AM", () => {
  it("should call a method on an object", () => {
    const actual = AM("toString", 12);
    const expected = "12";
    expect(actual).toBe(expected);
  });

  it("should pass arguments to the method", () => {
    const actual = AM("map", [1, 2, 3], x => x + 1);
    const expected = [2, 3, 4];
    expect(actual).toEqual(expected);
  });
});
