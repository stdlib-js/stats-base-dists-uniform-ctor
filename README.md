<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Uniform

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Uniform distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Uniform = require( 'path/to/vendor/umd/stats-base-dists-uniform-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Uniform;
})();
</script>
```

#### Uniform( \[a, b] )

Returns an [uniform][uniform-distribution] distribution object.

```javascript
var uniform = new Uniform();

var mu = uniform.mean;
// returns 0.5
```

By default, `a = 0.0` and `b = 1.0`. To create a distribution having a different `a` (minimum support) and `b` (maximum support), provide the corresponding arguments.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var mu = uniform.mean;
// returns 3.0
```

* * *

## uniform

An [uniform][uniform-distribution] distribution object has the following properties and methods...

### Writable Properties

#### uniform.a

Minimum support of the distribution. `a` **must** be a number smaller than `b`.

```javascript
var uniform = new Uniform();

var a = uniform.a;
// returns 0.0

uniform.a = 0.5;

a = uniform.a;
// returns 0.5
```

#### uniform.b

Maximum support of the distribution. `b` **must** be a number larger than `a`.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var b = uniform.b;
// returns 4.0

uniform.b = 3.0;

b = uniform.b;
// returns 3.0
```

* * *

### Computed Properties

#### Uniform.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var entropy = uniform.entropy;
// returns ~2.079
```

#### Uniform.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var kurtosis = uniform.kurtosis;
// returns -1.2
```

#### Uniform.prototype.mean

Returns the [expected value][expected-value].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var mu = uniform.mean;
// returns 8.0
```

#### Uniform.prototype.median

Returns the [median][median].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var median = uniform.median;
// returns 8.0
```

#### Uniform.prototype.skewness

Returns the [skewness][skewness].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var skewness = uniform.skewness;
// returns 0.0
```

#### Uniform.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var s = uniform.stdev;
// returns ~2.309
```

#### Uniform.prototype.variance

Returns the [variance][variance].

```javascript
var uniform = new Uniform( 4.0, 12.0 );

var s2 = uniform.variance;
// returns ~5.333
```

* * *

### Methods

#### Uniform.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.cdf( 2.5 );
// returns 0.25
```

#### Uniform.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.logcdf( 2.5 );
// returns ~-1.386
```

#### Uniform.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.logpdf( 2.5 );
// returns ~-0.693
```

#### Uniform.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.pdf( 2.5 );
// returns 0.5
```

#### Uniform.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var uniform = new Uniform( 2.0, 4.0 );

var y = uniform.quantile( 0.5 );
// returns 3.0

y = uniform.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-uniform-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var uniform = new Uniform( 2.0, 4.0 );

var mu = uniform.mean;
// returns 3.0

var median = uniform.median;
// returns 3.0

var s2 = uniform.variance;
// returns ~0.333

var y = uniform.cdf( 2.5 );
// returns 0.25

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-uniform-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-uniform-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-uniform-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-uniform-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-uniform-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-uniform-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-uniform-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-uniform-ctor/main/LICENSE

[uniform-distribution]: https://en.wikipedia.org/wiki/Uniform_distribution_%28continuous%29

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
