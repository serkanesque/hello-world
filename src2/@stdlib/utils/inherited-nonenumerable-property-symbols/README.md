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

# inheritedNonEnumerablePropertySymbols

> Return an array of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedNonEnumerablePropertySymbols = require( '@stdlib/utils/inherited-nonenumerable-property-symbols' );
```

#### inheritedNonEnumerablePropertySymbols( obj\[, level] )

Returns an `array` of an object's inherited non-enumerable [symbol][@stdlib/symbol/ctor] properties.

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );

var hasSymbols = hasSymbolSupport();
var symbols;
var f;

function Foo() {
    if ( hasSymbols ) {
        defineProperty( this, Symbol( 'a' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
            'value': 'a'
        });
    }
    return this;
}

if ( hasSymbols ) {
    defineProperty( Foo.prototype, Symbol( 'b' ), {
        'configurable': false,
        'enumerable': false,
        'writable': false,
        'value': 'b'
    });
}

f = new Foo();
symbols = inheritedNonEnumerablePropertySymbols( f );
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var symbols = inheritedNonEnumerablePropertySymbols( [], 1 );
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

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inheritedNonEnumerablePropertySymbols = require( '@stdlib/utils/inherited-nonenumerable-property-symbols' );

var hasSymbols = hasSymbolSupport();
var symbols;
var obj;

function Foo() {
    this.a = 'a';
    defineProperty( this, 'b', {
        'configurable': false,
        'enumerable': false,
        'writable': true,
        'value': 'b'
    });
    if ( hasSymbols ) {
        this[ Symbol( 'a' ) ] = 'a';
        defineProperty( this, Symbol( 'b' ), {
            'configurable': false,
            'enumerable': false,
            'writable': false,
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
symbols = inheritedNonEnumerablePropertySymbols( obj );

console.log( symbols );
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

[@stdlib/symbol/ctor]: https://www.npmjs.com/package/@stdlib/symbol-ctor

</section>

<!-- /.links -->