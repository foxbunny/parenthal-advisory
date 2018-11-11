/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { replace } from "./replace";

describe("replace", () => {
  it("should replace characters in a string", () => {
    const s = "testable";
    const actual = replace("t", "T", s);
    const expected = "Testable";
    expect(actual).toBe(expected);
  });

  it("should replace in string using regexp", () => {
    const s = "testable";
    const actual = replace(/t/g, "T", s);
    const expected = "TesTable";
    expect(actual).toBe(expected);
  });

  it("should replace in string with a replacer function", () => {
    const s = "testable";
    const actual = replace(/t/g, x => `(${x})`, s);
    const expected = "(t)es(t)able";
    expect(actual).toBe(expected);
  });

  it("should replace elements in an array", () => {
    const xs = [1, 3, 2, 4, 2, 1];
    const actual = replace(1, 0, xs);
    const expected = [0, 3, 2, 4, 2, 0];
    expect(actual).toEqual(expected);
  });

  it("should replace in array using a matcher function", () => {
    const xs = [1, 3, 2, 4, 2, 1];
    const actual = replace(x => x % 2 === 0, 0, xs);
    const expected = [1, 3, 0, 0, 0, 1];
    expect(actual).toEqual(expected);
  });

  it("should replace in array using a replacer function", () => {
    const xs = [1, 3, 2, 4, 2, 1];
    const actual = replace(x => x % 2, x => x * 2, xs);
    const expected = [2, 6, 2, 4, 2, 2];
    expect(actual).toEqual(expected);
  });
});
