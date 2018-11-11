/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from "./A";

const either = (test, f, g) => (...args) => A(test, ...args)
  ? A(f, ...args)
  : A(g, ...args);

export { either };
