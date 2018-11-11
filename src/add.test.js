/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { add } from "./add";

describe("concat", () => {
  it("should add numbers", () => {
    const actual = add(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });

  it("should concatenate strings", () => {
    const actual = add("foo", "bar");
    const expected = "foobar";
    expect(actual).toBe(expected);
  });

  it("should merge objects", () => {
    const actual = add({ foo: "bar" }, { bar: "baz" });
    const expected = { foo: "bar", bar: "baz" };
    expect(actual).toEqual(expected);
  });

  it("should merge arrays", () => {
    const actual = add([1, 2], [3, 4]);
    const expected = [1, 2, 3, 4];
    expect(actual).toEqual(expected);
  });

  it("should concat objects with concat method", () => {
    const o = {
      foo: "12",
      concat(x) {
        return this.foo + x + this.foo;
      }
    };
    const actual = add(o, "00");
    const expected = "120012";
    expect(actual).toBe(expected);
  });
});
