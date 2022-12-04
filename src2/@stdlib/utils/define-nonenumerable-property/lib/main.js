/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var defineProperty = require( './../../define-property' );


// MAIN //

/**
* Defines a non-enumerable property.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {*} value - value to set
*
* @example
* var objectKeys = require( '@stdlib/utils/keys' );
*
* var obj = {};
*
* setNonEnumerableProperty( obj, 'foo', 'bar' );
*
* var v = obj.foo;
* // returns 'bar'
*
* var keys = objectKeys( obj );
* // returns []
*/
function setNonEnumerableProperty( obj, prop, value ) {
	defineProperty( obj, prop, {
		'configurable': true,
		'enumerable': false,
		'writable': true,
		'value': value
	});
}


// EXPORTS //

module.exports = setNonEnumerableProperty;
