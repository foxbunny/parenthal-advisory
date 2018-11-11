/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { V } from "./V";

describe("V", () => {
  it("should return a function that always evalutates to a value", () => {
    const f = V(12);
    expect(f()).toBe(12);
    expect(f('foo')).toBe(12);
    expect(f(false)).toBe(12);
  });
});
