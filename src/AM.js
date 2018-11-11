/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from "./A";
import { M } from "./M";

const AM = (key, obj, ...args) => A(M(key, obj), ...args);

export { AM };
