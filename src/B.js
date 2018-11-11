/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from "./A";
import { AM } from './AM';
import { C } from "./C";
import { P } from "./P";
import { M } from "./M";
import { W } from "./W";
import { replace } from "./replace";

const placeholder = { type: "argumentPlaceholder" };

const B = (f, ...boundArgs) => (...unboundArgs) => {
  const firstUnbound = P(M("shift", unboundArgs));
  const args = W(boundArgs, C(
    P(replace, placeholder, firstUnbound),
    completeBound => AM("concat", completeBound, unboundArgs)
  ));
  return A(f, ...args);
};

export { B, placeholder as __ }
