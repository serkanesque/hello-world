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

/**
* Test whether at least one element in a collection passes a test implemented by a predicate function.
*
* @module @stdlib/utils/async/any-by
*
* @example
* var readFile = require( '@stdlib/fs/read-file' );
* var anyByAsync = require( '@stdlib/utils/async/any-by' );
*
* var files = [
*     './beep.js',
*     './boop.js'
* ];
*
* function done( error, bool ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( bool ) {
*         console.log( 'Successfully read at least one file.' );
*     } else {
*         console.log( 'Unable to read any files.' );
*     }
* }
*
* function predicate( file, next ) {
*     var opts = {
*         'encoding': 'utf8'
*     };
*     readFile( file, opts, onFile );
*
*     function onFile( error ) {
*         if ( error ) {
*             return next( null, false );
*         }
*         next( null, true );
*     }
* }
*
* anyByAsync( files, predicate, done );
*/

// MODULES //

var setReadOnly = require( './../../../define-nonenumerable-read-only-property' );
var anyByAsync = require( './any_by.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( anyByAsync, 'factory', factory );


// EXPORTS //

module.exports = anyByAsync;
