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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var entropy = require( '@stdlib/stats-base-dists-uniform-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-uniform-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-uniform-mean' );
var median = require( '@stdlib/stats-base-dists-uniform-median' );
var skewness = require( '@stdlib/stats-base-dists-uniform-skewness' );
var stdev = require( '@stdlib/stats-base-dists-uniform-stdev' );
var variance = require( '@stdlib/stats-base-dists-uniform-variance' );
var cdf = require( '@stdlib/stats-base-dists-uniform-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-uniform-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-uniform-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-uniform-mgf' );
var pdf = require( '@stdlib/stats-base-dists-uniform-pdf' );
var quantile = require( '@stdlib/stats-base-dists-uniform-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated CDF
*/
function uniformCDF( x ) {
	return cdf( x, this.a, this.b );
}

/**
* Evaluates the the natural logarithm of the cumulative distribution function (logCDF).
*
* @private
* @param {number} x - input value
* @returns {Probability} evaluated logCDF
*/
function uniformLogCDF( x ) {
	return logcdf( x, this.a, this.b );
}

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function uniformLogPDF( x ) {
	return logpdf( x, this.a, this.b );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function uniformMGF( t ) {
	return mgf( t, this.a, this.b );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function uniformPDF( x ) {
	return pdf( x, this.a, this.b );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function uniformQuantile( p ) {
	return quantile( p, this.a, this.b );
}


// MAIN //

/**
* Uniform distribution constructor.
*
* @constructor
* @param {number} [a=0.0] - minimum support
* @param {number} [b=1.0] - maximum support
* @throws {TypeError} `a` must be a number
* @throws {TypeError} `b` must be a number
* @throws {RangeError} `a` must be less than `b`
* @returns {Uniform} distribution instance
*
* @example
* var uniform = new Uniform( 0.0, 1.0 );
*
* var y = uniform.cdf( 0.8 );
* // returns 0.8
*
* var mu = uniform.mean;
* // returns 0.5
*/
function Uniform() {
	var a;
	var b;
	if ( !(this instanceof Uniform) ) {
		if ( arguments.length === 0 ) {
			return new Uniform();
		}
		return new Uniform( arguments[ 0 ], arguments[ 1 ] );
	}
	if ( arguments.length ) {
		a = arguments[ 0 ];
		b = arguments[ 1 ];
		if ( !isNumber( a ) || isnan( a ) ) {
			throw new TypeError( format( 'invalid argument. Minimum support must be a number. Value: `%s`.', a ) );
		}
		if ( !isNumber( b ) || isnan( b ) ) {
			throw new TypeError( format( 'invalid argument. Maximum support must be a number. Value: `%s`.', b ) );
		}
		if ( a >= b ) {
			throw new RangeError( format( 'invalid arguments. Minimum support must be less than maximum support. Value: `(%f, %f)`.', a, b ) );
		}
	} else {
		a = 0.0;
		b = 1.0;
	}
	defineProperty( this, 'a', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return a;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( value >= b ) {
				throw new RangeError( format( 'invalid assignment. Must be less than %f. Value: `%f`.', b, value ) );
			}
			a = value;
		}
	});
	defineProperty( this, 'b', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return b;
		},
		'set': function set( value ) {
			if ( !isNumber( value ) || isnan( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a number. Value: `%s`.', value ) );
			}
			if ( a >= value ) {
				throw new RangeError( format( 'invalid assignment. Must be greater than %f. Value: `%f`.', a, value ) );
			}
			b = value;
		}
	});
	return this;
}

/**
* Uniform distribution differential entropy.
*
* @name entropy
* @memberof Uniform.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.entropy;
* // returns ~2.079
*/
setReadOnlyAccessor( Uniform.prototype, 'entropy', function get() {
	return entropy( this.a, this.b );
});

/**
* Uniform distribution excess kurtosis.
*
* @name kurtosis
* @memberof Uniform.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.kurtosis;
* // returns -1.2
*/
setReadOnlyAccessor( Uniform.prototype, 'kurtosis', function get() {
	return kurtosis( this.a, this.b );
});

/**
* Uniform distribution expected value.
*
* @name mean
* @memberof Uniform.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.mean;
* // returns 8.0
*/
setReadOnlyAccessor( Uniform.prototype, 'mean', function get() {
	return mean( this.a, this.b );
});

/**
* Uniform distribution median.
*
* @name median
* @memberof Uniform.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.median;
* // returns 8.0
*/
setReadOnlyAccessor( Uniform.prototype, 'median', function get() {
	return median( this.a, this.b );
});

/**
* Uniform distribution skewness.
*
* @name skewness
* @memberof Uniform.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.skewness;
* // returns 0.0
*/
setReadOnlyAccessor( Uniform.prototype, 'skewness', function get() {
	return skewness( this.a, this.b );
});

/**
* Uniform distribution standard deviation.
*
* @name stdev
* @memberof Uniform.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.stdev;
* // returns ~2.309
*/
setReadOnlyAccessor( Uniform.prototype, 'stdev', function get() {
	return stdev( this.a, this.b );
});

/**
* Uniform distribution variance.
*
* @name variance
* @memberof Uniform.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var uniform = new Uniform( 4.0, 12.0 );
*
* var v = uniform.variance;
* // returns ~5.333
*/
setReadOnlyAccessor( Uniform.prototype, 'variance', function get() {
	return variance( this.a, this.b );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Uniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.cdf( 3.0 );
* // returns ~0.5
*/
setReadOnly( Uniform.prototype, 'cdf', uniformCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (logCDF).
*
* @name logcdf
* @memberof Uniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.logcdf( 2.5 );
* // returns ~-1.386
*/
setReadOnly( Uniform.prototype, 'logcdf', uniformLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (logPDF).
*
* @name logpdf
* @memberof Uniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.logpdf( 2.5 );
* // returns ~-0.693
*/
setReadOnly( Uniform.prototype, 'logpdf', uniformLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Uniform.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.mgf( 0.5 );
* // returns ~4.671
*/
setReadOnly( Uniform.prototype, 'mgf', uniformMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Uniform.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.pdf( 2.4 );
* // returns 0.5
*/
setReadOnly( Uniform.prototype, 'pdf', uniformPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Uniform.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var uniform = new Uniform( 2.0, 4.0 );
*
* var v = uniform.quantile( 0.5 );
* // returns 3.0
*/
setReadOnly( Uniform.prototype, 'quantile', uniformQuantile );


// EXPORTS //

module.exports = Uniform;
