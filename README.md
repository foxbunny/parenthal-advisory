# PARENTHAL ADVISORY : FUNCTIONAL PROGRAMMING

Experimental library for functional programming in JavaScript.

## Installation

Don't.

## Usage

Functions in PARENTHAL ADVISORY are divided into two groups. The 'alphabet 
functions' is a group of core functions that define the basic manner of coding 
with PARENTHAL ADVISORY. The 'helper functions' are utility functions that 
are used to perform general functional programming tasks.

Note that the names of the alphabet functions have nothing to do with 
combinatory logic and combinators. The `I` function is essentially the I 
combinator, and `V` is the K combinator. Other functions are not related 
(at least not intentionally).

### Special objects

#### `__`

Argument placeholder used in `B`. In case your browser or editor has font 
ligatures, please note that this is a double-underscore.

(See: B - Bind)

### Alphabet functions

#### `A` - Apply

Applies a function to any number of arguments.

Example:

```javascript
const add = (x, y) => x + y
A(add, 1, 2) 
// => 3
```

#### `AM` - Apply method

Same as calling A with M as first argument.

Example:

```javascript
const a = [1, 2, 3]
AM('concat', a, 4)
// => [1, 2, 3, 4]
```

#### `B` - Bind

**NOTE:** Not the same as `Function.prototype.bind()`.

Same as `P` but allows placeholders. The placeholder will be filled in when 
the partially applied function is called.

Although `B` does everything `P` does, and adds placeholders on top of it, it
exists separately for performance reasons -- `P` is much more performant. You
should prefer `P` for the cases where placeholders are not required.

(See: P - Partially apply and `__`)

```javascript
const f = (x, y, z) => x + y + z
const p = B(f, 1, __, 3)
P(2)
// => 6
```

#### `C` - Compose

Composes functions left-to-right (a.k.a. 'pipe').

Example:

```javascript
const inc = x => x + 1
const double = x => x * 2
A(C(inc, double), 1)
// => 4
```

#### `I` - Identity

A function that always returns its argument. (Also known as I combinator.)

Example:

```javascript
I(12)
// => 12
I('foo')
// => 'foo'
I()
// => undefined
```

#### `M` - Method

Creates a bound method of an object.

(See: AM - Apply method)

Example:

```javascript
const xs = [1, 2, 3]
const map = M('map', xs)
A(map, x => x + 1)
// => [2, 3, 4]
```

#### `P` - Partially apply

Partially applies a function to any number of arguments.

(See: B - Bind)

Example:

```javascript
const add = (x, y) => x + y
[1, 2, 3, 4].map(P(add, 1))
// => [2, 3, 4, 5]
```

#### `S` - Safely apply

Just like `A` but only applies the function if the first argument is not a 
`null` or `undefined`. It otherwise behaves like `I`. This is the opposite of 
`U`.

The `S` and `U` functions can be placed one after the other in a composition 
to create total coverage.

(See: U - Unify)

Example:

```javascript
S(x => x + 1, null)
// => null
S(x => x + 1, 1)
// => 2
```

#### `U` - Unify

Just like `A` but only applies the function if the first argument is `null` 
or `undefined`. It otherwise behaves like `I`. This is the opposite of `S`.

The `S` and `U` functions can be placed one after the other in a composition 
to create total coverage.

(See: S - Safe apply)

Example:

```javascript
U(() => 0, null)
// => 0
U(() => 0, 12)
// => 12
```

#### `V` - Value

Create a function that always evaluates to a specified value regardless of 
its arguments. (Also known as K combinator.)

```javascript
const f = V(12)
f()
// => 12
f(false)
// => 12
f({})
// => 12
```

#### `W` - With

Takes a value and a function and applies the function to the value.

Example:

```javascript
W(12, x => x / 2)
// => 6
```

### Helper functions

#### `add` - add/concatenate/merge

It adds together numbers, strings, arrays, and objects.

Example:

```javascript
add(1, 2)
// => 3
add('foo', 'bar')
// => 'foobar'
add([1, 2, 3], 4)
// => [1, 2, 3, 4]
add({ foo: 'bar' }, { bar: 'baz' })
// => { foo: 'bar', bar: 'baz }
```

#### `either` - branch based on a condition

Select either of the branch functions based on a test.

Example:

```javascript
const yesno = either(x => x, () => 'yes', () => 'no')
yesno(true)
// => 'yes'
yesno(false)
// => 'no'
```

#### `eq` - equals

Returns true when two values are identical.

Example:

```javascript
eq(1, 1)
// => true
eq(2, 1)
// => false
eq({}, {})
// => false
```

#### `replace` - replace items in iterables

Replaces items in iterables such as strings and arrays. It will always try to
delegate to an object's `replace()` method, so it can work with custom 
objects that have it.

Example:

```javascript
replace('bar', 'foo', 'foobar')
// => 'foofoo'
replace(/t/g, 'T', 'testing')
// => TesTing
replace(0, 1, [0, 1, 0, 1])
// => [1, 1, 1, 1]
```

## Bugs

Maybe.

## License

MIT. See LICENSE file.

