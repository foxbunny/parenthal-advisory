/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from "./A";
import { M } from "./M";

const C = (...fs) => A(
  M("reduce", fs),
  (f, g) => (...args) => g(f(...args))
);

export { C };
