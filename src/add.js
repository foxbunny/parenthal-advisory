/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { AM } from './AM'

const add = (x, y) => {
  if (typeof x.concat === "function") return AM("concat", x, y);
  if (typeof x === "object") return Object.assign({}, x, y);
  return x + y;
};

export { add };
