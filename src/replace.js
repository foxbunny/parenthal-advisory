/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from "./A";
import { AM } from "./AM";
import { P } from "./P";
import { V } from "./V";
import { eq } from "./eq";

const replaceArray = (xs, target, replacement) => {
  const match = typeof target === "function" ? target : P(eq, target);
  const replacer = typeof replacement === "function"
    ? replacement
    : V(replacement);
  return AM("map", xs, x => match(x) ? replacer(x) : x);
};

const replace = (target, replacement, xs) => {
  if (typeof xs.replace === "function") return AM(
    "replace",
    xs,
    target,
    replacement
  );
  return A(replaceArray, xs, target, replacement);
};

export { replace };
