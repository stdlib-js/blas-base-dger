/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( '@stdlib/blas-base-layout-resolve-enum' );
var format = require( '@stdlib/string-format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs the rank 1 operation `A = alpha*x*y^T + A`.
*
* @param {*} order - storage layout
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} x - an `M` element vector
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - an `N` element vector
* @param {integer} strideY - `y` stride length
* @param {Float64Array} A - matrix of coefficients
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @throws {TypeError} first argument must be a supported BLAS memory layout
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var M = 4;
* var N = 3;
*
* var B = new Float64Array( M*N );
*
* var x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 4.0, 0.0 ] );
*
* dger( 'row-major', N, M, 1.0, y, 1, x, 1, B, M );
* // B => <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 0.0, 4.0, 8.0, 12.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function dger( order, M, N, alpha, x, strideX, y, strideY, A, LDA ) {
	var ord = resolve( order );
	if ( ord === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be a supported BLAS memory layout. Value: `%s`.', order ) );
	}
	addon( ord, M, N, alpha, x, strideX, y, strideY, A, LDA );
	return A;
}


// EXPORTS //

module.exports = dger;
