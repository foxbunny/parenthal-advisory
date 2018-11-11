/**
 * (c) 2017-2018, CUBE Team
 * All rights reserved.
 */

import { I } from "./I";


describe("I", () => {
  it("should return its argument as is", () => {
    expect(I(1)).toBe(1);
  });

  it("should return undefined if no arguments are provided", () => {
    expect(I()).toBe(undefined);
  });
});
