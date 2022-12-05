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

var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonEnumerableProperty = require( '@stdlib/assert/is-nonenumerable-property' );
var getOwnPropertyNames = require( './../../property-names' );
var getPrototypeOf = require( './../../get-prototype-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Returns an array of an object's inherited non-enumerable property names.
*
* @param {*} value - input object
* @param {PositiveInteger} [level] - inheritance level
* @throws {TypeError} second argument must be a positive integer
* @returns {Array} a list of inherited non-enumerable property names
*
* @example
* var keys = inheritedNonEnumerablePropertyNames( {} );
*/
function inheritedNonEnumerablePropertyNames( value, level ) { // eslint-disable-line id-length
	var names;
	var cache;
	var obj;
	var tmp;
	var N;
	var n;
	var k;
	var i;

	if ( arguments.length > 1 ) {
		if ( !isPositiveInteger( level ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a positive integer. Value: `' + level + '`.' );
		}
		N = level;
	} else {
		N = MAX_SAFE_INTEGER;
	}
	if ( value === null || value === void 0 ) {
		return [];
	}
	// Get the value's prototype:
	obj = getPrototypeOf( value );

	// Walk the prototype chain collecting non-enumerable property names...
	names = [];
	cache = {};
	n = 1;
	while ( obj && n <= N ) {
		tmp = getOwnPropertyNames( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			k = tmp[ i ];
			if (
				hasOwnProp( cache, k ) === false &&
				isNonEnumerableProperty( obj, k )
			) {
				names.push( k );
			}
			cache[ k ] = true;
		}
		obj = getPrototypeOf( obj );
		n += 1;
	}

	return names;
}


// EXPORTS //

module.exports = inheritedNonEnumerablePropertyNames;