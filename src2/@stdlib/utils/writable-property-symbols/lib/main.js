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

var getOwnPropertySymbols = require( './../../property-symbols' );
var isWritableProperty = require( '@stdlib/assert/is-writable-property' );


// MAIN //

/**
* Returns an array of an object's own writable symbol properties.
*
* @param {*} value - input object
* @returns {Array} a list of own writable symbol properties
*
* @example
* var symbols = writablePropertySymbols( {} );
*/
function writablePropertySymbols( value ) {
	var symbols;
	var i;
	var n;

	if ( value === null || value === void 0 ) {
		return [];
	}
	symbols = getOwnPropertySymbols( Object( value ) );
	n = 0;
	for ( i = 0; i < symbols.length; i++ ) {
		if ( isWritableProperty( value, symbols[ i ] ) ) {
			symbols[ n ] = symbols[ i ];
			n += 1;
		}
	}
	symbols.length = n;

	return symbols;
}


// EXPORTS //

module.exports = writablePropertySymbols;
