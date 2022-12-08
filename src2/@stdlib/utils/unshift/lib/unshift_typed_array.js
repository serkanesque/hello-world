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

var ArrayBuffer = require( '@stdlib/array/buffer' );
var ceil2 = require( '@stdlib/math/base/special/ceil2' ); // TODO: nextpow2


// MAIN //

/**
* Adds one or more elements to the beginning of a typed array.
*
* ## Notes
*
* -   If the underlying `ArrayBuffer` is too short, we need to copy the data to a new `ArrayBuffer`. To do so, we allocate a new `ArrayBuffer` in a manner similar to how `Arrays` are resized (i.e., allocate enough memory to hold `nextpow2(n)` elements).
* -   Beware that, if an ArrayBuffer view is preceded by one or more other views, the created view may contain elements from those views, thus resulting in possible mutation. Accordingly, providing a typed array view having a shared underlying `ArrayBuffer` may have unintended consequences (including security vulnerabilities).
*
* @private
* @param {TypedArray} arr - input array
* @param {Array} items - items to add
* @returns {TypedArray} input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* arr = unshift( arr, 6.0, 7.0 );
* // returns <Float64Array>[ 6.0, 7.0, 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function unshift( arr, items ) {
	var nbytes;
	var ibytes;
	var offset;
	var total;
	var len;
	var buf;
	var n;
	var v;
	var i;

	len = arr.length;
	n = items.length;

	ibytes = n * arr.BYTES_PER_ELEMENT;
	offset = arr.byteOffset;

	if ( offset < ibytes ) {
		nbytes = len * arr.BYTES_PER_ELEMENT;
		total = nbytes + ibytes + offset;
		buf = new ArrayBuffer( ceil2( total+1 ) );
		offset = buf.byteLength - nbytes - ibytes;
		v = new arr.constructor( buf, offset, len+n );
		for ( i = 0; i < len; i++ ) {
			v[ i+n ] = arr[ i ];
		}
	} else {
		offset -= ibytes;
		v = new arr.constructor( arr.buffer, offset, len+n );
	}
	for ( i = 0; i < n; i++ ) {
		v[ i ] = items[ i ];
	}
	return v;
}


// EXPORTS //

module.exports = unshift;
