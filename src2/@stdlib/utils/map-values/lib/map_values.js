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

var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Maps values from one object to a new object having the same keys.
*
* ## Notes
*
* -   Iteration order is **not** guaranteed.
* -   The function only operates on own properties, not inherited properties.
*
*
* @param {Object} obj - source object
* @param {Function} transform - transform function
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a function
* @returns {Object} new object
*
* @example
* function transform( value, key ) {
*     return key + value;
* }
*
* var obj1 = {
*     'a': 1,
*     'b': 2
* };
*
* var obj2 = mapValues( obj1, transform );
* // returns { 'a': 'a1', 'b': 'b2' }
*/
function mapValues( obj, transform ) {
	var out;
	var key;
	if ( typeof obj !== 'object' || obj === null ) {
		throw new TypeError( 'invalid argument. First argument must be an object. Value: `'+obj+'`.' );
	}
	if ( !isFunction( transform ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+transform+'`.' );
	}
	out = {};
	for ( key in obj ) {
		if ( hasOwnProp( obj, key ) ) {
			out[ key ] = transform( obj[ key ], key, obj );
		}
	}
	return out;
}


// EXPORTS //

module.exports = mapValues;
