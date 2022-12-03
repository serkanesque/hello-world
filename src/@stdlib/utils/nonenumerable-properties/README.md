<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# nonEnumerableProperties

> Return an array of an object's own non-enumerable property names and symbols.

<section class="usage">

## Usage

```javascript
var nonEnumerableProperties = require( '@stdlib/utils/nonenumerable-properties' );
```

#### nonEnumerableProperties( obj )

Returns an `array` of an object's own non-enumerable property names and symbols.

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {};

obj.a = 'a';
defineProperty( obj, 'b', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'b'
});

var props = nonEnumerableProperties( obj );
// returns [ 'b' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property order is not guaranteed, as `object` property enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s properties, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var nonEnumerableProperties = require( '@stdlib/utils/nonenumerable-properties' );

var hasSymbols = hasSymbolSupport();
var props;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': true,
            'enumerable': false,
            'writable': true,
            'value': 'b'
        });
    }
    return this;
}

Foo.prototype.c = 'c';
defineProperty( Foo.prototype, 'd', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'd'
});
if ( hasSymbols ) {
    Foo.prototype[ Symbol( 'c' ) ] = 'c';
    defineProperty( Foo.prototype, Symbol( 'd' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'd'
    });
}

obj = new Foo();
props = nonEnumerableProperties( obj );

console.log( props );
// => [ 'b', ... ]
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->