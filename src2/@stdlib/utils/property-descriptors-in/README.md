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

# propertyDescriptorsIn

> Return an object's own and inherited [property descriptors][@stdlib/utils/property-descriptors].

<section class="usage">

## Usage

```javascript
var propertyDescriptorsIn = require( '@stdlib/utils/property-descriptors-in' );
```

#### propertyDescriptorsIn( obj )

Returns an object's own and inherited [property descriptors][@stdlib/utils/property-descriptors].

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var desc = propertyDescriptorsIn( obj );
// returns { 'a': {...}, 'b': {...}, ... }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, if provided `null` or `undefined`, the function returns an empty `object`, rather than throwing an error.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var propertyDescriptorsIn = require( '@stdlib/utils/property-descriptors-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = propertyDescriptorsIn( obj );

console.log( desc );
// => { 'beep': {...}, 'a': {...}, 'baz': {...}, 'foo': {...}, ... }
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/utils/property-descriptors]: https://www.npmjs.com/package/@stdlib/utils/tree/main/property-descriptors

</section>

<!-- /.links -->