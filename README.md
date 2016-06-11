# Lemonade

Lemonade is a a simple, flexible and easy-to-customise grid system. It was created in order to give designers & developers a kickstart with their projects. It currently supports Chrome, Firefox, Safari, Opera & IE 9+, also supports major phone devices too.

## Installation

-   Clone `git clone https://github.com/dope/lemonade.git`
-   [Download the latest version](https://github.com/dope/lemonade/archive/master.zip)
-   Install with npm: `npm install lemonade-grid`
-   Install with Bower: `bower install lemonade`

## CDN Support
```
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/lemonade/2.1.0/lemonade.min.css">
```

## Getting Started
Getting started couldn't be easier

#### First you need to link the stylesheet
```html
<link rel="stylesheet" type="text/css" href="css/lemonade.min.css">
```

#### Default grid
```html
<div class="frame">
    <div class="bit-3">Content here</div>
    <div class="bit-3">Content here</div>
    <div class="bit-3">Content here</div>
</div>
```
Creating a three-column layout (a gallery for example) is really simple. Wrap the .bit's in a .frame class to clear the floats. This has no responsive widths applied to it, you will need to set these yourself by using the `bp` mixin like:

```scss
@include bp(xs) {}
@include bp(sm) {}
@include bp(md) {}
@include bp(lg) {}
@include bp(xl) {}
```

#### Mobile first approach
Lemonade v3 has gone mobile-first which is the industry standard these days. All classes need to be prefixed `.bit-` followed by a breakpoint and the width of the grid. Below is an example of a 3 column grid.

```html
<div class="bit-xs-3">
    <div class="box box--example">third (.bit-xs-3)</div>
</div>

<div class="bit-xs-3">
    <div class="box box--example">third (.bit-xs-3)</div>
</div>

<div class="bit-xs-3">
    <div class="box box--example">third (.bit-xs-3)</div>
</div>
```

This will be a width of `33.333%` from the `xs` breakpoint but you can change this with another breakpoint class like:

```html
<div class="bit-md-2">
```

This will make the width `50%` at `md`

#### Customising your grid
Maybe you want to go old school and create a two-column layout, It's so easy all you need is basic math (along as the .bit- classes equal to 100%, it will be perfect).

```html
<div class="frame">
    <div class="bit-75">Content here</div>
    <div class="bit-25">Content here</div>
</div>
```
Creating the css is also simple:
```css
.bit-75 { width:75% }
.bit-25 { width:25% }
```

### Support
If you have any questions or you're struggling with it, get in touch:

-   [joe@lifes.gd](mailto:joe@lifes.gd)
-   [@joericho](http://twitter.com/joericho)
-   [@lemonadegrid](http://twitter.com/lemonadegrid)

### Tutorials
[Build a Freshly Squeezed Responsive Grid System](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/build-a-freshly-squeezed-responsive-grid-system)
If you have written about Lemonade or want too - [let me know](http://twitter.com/joericho)

### Lets make Lemonade
Currently building the real documentation website for Lemonade, If you've got any finished results of using Lemonade or you've got any kind words to say - [get in touch](http://twitter.com/joericho)

### Thank you!
I've had some amazing feedback since creating Lemonade and I am glad it can help people.

Also want to thank people who are testing and contributing to the product.

### License
```
Copyright (C) 2016 Joe Richardson

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
