/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { I } from "./I";
import { either } from "./either";

describe("either", () => {
  const halveEven = either(x => x % 2, I, x => x / 2);

  it("should invoke the second argument if first returns truthy", () => {
    const actual = halveEven(3);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it("should invoke the third argument if first returns falsy", () => {
    const actual = halveEven(4);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
