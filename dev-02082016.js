
/**
 * This is the main Coloriss core file
 * - Everything still under development. But you can test it at https://tbzr.github.io/coloriss
 */

(function () {

	var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this;

    function Coloriss (color) {
    	if (typeof color !== 'undefined') {
    		parse(color);
    	}
    	return this;
    };

    if (typeof exports != 'undefined' && !exports.nodeType) {
    	if (typeof module != 'undefined' && !module.nodeType && module.exports) {
    		exports = module.exports = Coloriss;
    	}
    	exports.Coloriss = Coloriss;
    } else {
    	root.Coloriss = Coloriss;
    }

    var intToHex = function (n) {
    	var s = "0123456789ABCDEF";

    	n = parseInt(n, 10);
    	if (!isNaN(n)) {
    		n = Math.max(0, Math.min(n, 255));
    		return s.charAt((n - n % 16) / 16) + s.charAt(n % 16);
    	}
    };

    var hexToRGB = function (hex) {
    	var a, r, g, b;

    	if (hex.indexOf('#') > -1)
    		hex = hex.substr(1, hex.length);

    	if (hex.length === 3) {
    		hex += hex;
    	}

    	hex = parseInt("0x" + hex.toUpperCase());

		a = hex.length === 6 ? '1' : hex >> 24;
		r = 0xFF & (hex >> 16);
		g = 0xFF & (hex >> 8);
		b = 0xFF & hex;

		return {a:a, r:r, g:g, b:b};
    };

    var RGBtoHex = function (rgb) {

    	if (typeof rgb === 'object') {
    		return intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
    	}
    };

    var parse = function (color) {

    	var match;

    	// Match an Hexadecimal color
    	if ((match = color.match(/^#?(?:[0-9a-f]{3}){1,2}$/i))) {
    		this._hex = match[0];
    		this._rgb = hexToRGB(this._hex);
    	}
    	// Match an rgb(a) color
    	else if ((match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))) {
    		match.shift();
    		this._rgb = {a:match[3], r:match[0], g:match[1], b:match[2]};
    		this._hex = RGBtoHex(this._rgb);
    	}
    };

    Coloriss.VERSION = '1.0.0';

    Coloriss.COLORS = {
    	red: '#C0392B',
    	green: '#2ECC71',
    	blue: '#3498DB',
    	yellow: '#F1C40F',
    	orange: '#E67E22',
    	turquoise: '#1ABC9C',
    	grey: '#EEEEEE',
    	black: '#000000',
    	dark: '#333333',
    	white: '#FFFFFF'
    };

    Coloriss.prototype.hex = function () {
    	return this._hex;
    };

    Coloriss.prototype.rgb = function () {
    	return this._rgb;
    };

    Coloriss.prototype.alpha = function () {
    	return this._rgb.a;
    };

    Coloriss.prototype.red = function () {
    	return this._rgb.r;
    };

    Coloriss.prototype.green = function () {
    	return this._rgb.g;
    };

    Coloriss.prototype.blue = function () {
    	return this._rgb.b;
    };

    Coloriss.prototype.greyScale = function () {
    	var c = this._rgb;
    	return (c.r + c.g + c.b) / 3;
    };

})();