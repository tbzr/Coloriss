# Coloriss 

[![Build Status](https://travis-ci.org/tbzr/coloriss.png)](https://travis-ci.org/tbzr/coloriss)
[![npm version](https://badge.fury.io/js/coloriss.svg)](https://badge.fury.io/js/coloriss)
RGB | Hex converter. Easy to implement for both client-side or server-side services.

## Installation
You can install it manually or using some dependencies managers.
Using npm:
```
npm install --save coloriss
```
Using bower:
```
bower install --save coloriss
```

## Usage
Using in a node.js script
```javascript
var Coloriss = require('coloriss');

var cs = new Coloriss('#fff');

console.log(cs.hex()); // output: "#FFFFFF"
console.log(cs.rgb()); // output: {r:255, g:255, b:255}
console.log(cs.rgb(true)); // output: "rgb(255, 255, 255)"
```

Or directly in a javascript
```javascript
<script>

	var Coloriss = new Coloriss('#fff');
	...
	cs.hex();

</script>
```

## Demo
See a little demo of Coloriss implementation here: [Demo Page](http://tbzr.github.io/coloriss)

## License
Coloriss is 
