/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { M } from "./M";

describe("M", () => {
  it("should create a bound method", () => {
    const obj = {
      name: "Foo",
      foo() {
        return this.name;
      }
    };
    const actual = M("foo", obj);
    const expected = obj.foo.bind(obj);
    expect(actual()).toBe(expected());
  });
});
