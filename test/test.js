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

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-uniform-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-uniform-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-uniform-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-uniform-cdf' );
var mgf = require( '@stdlib/stats-base-dists-uniform-mgf' );
var pdf = require( '@stdlib/stats-base-dists-uniform-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-uniform-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-uniform-skewness' );
var variance = require( '@stdlib/stats-base-dists-uniform-variance' );
var entropy = require( '@stdlib/stats-base-dists-uniform-entropy' );
var median = require( '@stdlib/stats-base-dists-uniform-median' );
var stdev = require( '@stdlib/stats-base-dists-uniform-stdev' );
var mean = require( '@stdlib/stats-base-dists-uniform-mean' );
var Uniform = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uniform, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `a` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Uniform( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `b` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Uniform( 2.0, value );
		};
	}
});

tape( 'the function throws an error if provided `a` is larger or equal to `b`', function test( t ) {
	var values;
	var i;

	values = [
		[ 1.0, 1.0 ],
		[ 2.0, 0.0 ],
		[ 0.0, -1.0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Uniform( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'if provided arguments, the function requires both `a` and `b`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Uniform( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var uniform = new Uniform();
	t.strictEqual( uniform instanceof Uniform, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var uniform = new Uniform( 2.0, 4.0 );
	t.strictEqual( uniform instanceof Uniform, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var uniform = Uniform();
	t.strictEqual( uniform instanceof Uniform, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	uniform = Uniform( 2.0, 4.0 );
	t.strictEqual( uniform instanceof Uniform, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `a`', function test( t ) {
	var uniform;

	uniform = new Uniform( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( uniform, 'a' ), true, 'has property' );
	t.strictEqual( uniform.a, 2.0, 'returns expected value' );

	uniform.a = 3.0;
	t.strictEqual( uniform.a, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var uniform = new Uniform();
			uniform.a = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `a` to a value which is larger than or equal to `b`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		2.0,
		20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var uniform = new Uniform();
			uniform.a = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `b`', function test( t ) {
	var uniform;

	uniform = new Uniform( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( uniform, 'b' ), true, 'has property' );
	t.strictEqual( uniform.b, 4.0, 'returns expected value' );

	uniform.b = 3.0;
	t.strictEqual( uniform.b, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var uniform = new Uniform();
			uniform.b = value;
		};
	}
});

tape( 'the created distribution throws an error if one attempts to set `b` to a value which is smaller than or equal to `a`', function test( t ) {
	var values;
	var i;

	values = [
		0.0,
		-1.0,
		-20.0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var uniform = new Uniform();
			uniform.b = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'entropy' ), true, 'has property' );

	uniform = new Uniform();
	t.strictEqual( uniform.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'kurtosis' ), true, 'has property' );

	uniform = new Uniform( 2.0, 4.0 );
	t.strictEqual( uniform.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'mean' ), true, 'has property' );

	uniform = new Uniform();
	t.strictEqual( uniform.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'median' ), true, 'has property' );

	uniform = new Uniform( 2.0, 5.0 );
	t.strictEqual( uniform.median, median( 2.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'skewness' ), true, 'has property' );

	uniform = new Uniform( 0.5, 1.0 );
	t.strictEqual( uniform.skewness, skewness( 0.5, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'stdev' ), true, 'has property' );

	uniform = new Uniform( 3.0, 5.0 );
	t.strictEqual( uniform.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var uniform;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'variance' ), true, 'has property' );

	uniform = new Uniform( 3.0, 5.0 );
	t.strictEqual( uniform.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.cdf ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.logcdf ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.logpdf ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.mgf ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.pdf ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var uniform;
	var y;

	t.strictEqual( hasOwnProp( Uniform.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Uniform.prototype.quantile ), true, 'has method' );

	uniform = new Uniform();
	y = uniform.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
