/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { U } from "./U";

describe("U", () => {
  it("should call the function if the first argument is null", () => {
    const actual = U(() => 0, null);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it("should call the function if the first argument is undefined", () => {
    const actual = U(() => 0, undefined);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it(
    "should return the first argument as is if it is not null or undefined",
    () => {
      const actual = U(() => 0, 1);
      const expected = 1;
      expect(actual).toBe(expected);
    }
  );
});
