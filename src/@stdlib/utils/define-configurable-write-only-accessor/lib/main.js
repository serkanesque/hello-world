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
* Defines a configurable write-only accessor.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {Function} setter - accessor
*
* @example
* var obj = {};
* var val = '';
*
* function setter( v ) {
*     val = v;
* }
*
* setConfigurableWriteOnlyAccessor( obj, 'foo', setter );
*
* obj.foo = 'beep';
*/
function setConfigurableWriteOnlyAccessor( obj, prop, setter ) { // eslint-disable-line id-length
	defineProperty( obj, prop, {
		'configurable': true,
		'enumerable': true,
		'set': setter
	});
}


// EXPORTS //

module.exports = setConfigurableWriteOnlyAccessor;
