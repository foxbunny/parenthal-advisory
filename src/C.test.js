/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { C } from "./C";


describe("C", () => {
  it("should compose functions", () => {
    const f = jest.fn(x => x + 1);
    const g = jest.fn(x => x * 2);
    const actual = C(f, g);
    const expected = x => g(f(x));
    expect(actual(1)).toEqual(expected(1));
  });

  it("should return the only argument as is", () => {
    const f = jest.fn();
    const actual = C(f);
    expect(actual).toBe(f);
  });
});
