/**
 * (c) 2018 Hajime Yamasaki Vukelic
 * Some rights reserved.
 */

import { A } from './A'
import { I } from './I'
import { either } from './either'
import { isNil } from './isNil'

const S = (f, ...args) => A(A(either, isNil, I, f), ...args);

export { S };
