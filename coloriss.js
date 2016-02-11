
(function (root) { 'use strict';

    var Coloriss = (function () {

        var _colors;

        _colors = {
            red: '#C0392B',
            green: '#2ECC71',
            blue: '#3498DB',
            yellow: '#F1C40F',
            orange: '#E67E22',
            turquoise: '#1ABC9C',
            grey: '#EEEEEE',
            black: '#000000',
            dark: '#333333',
            white: '#FFFFFF',
            pink: '#F7CAC9',
            gold: '#FFD700',
            silver: '#C0C0C0',
            copper: '#B87333',
            brass: '#B5A642',
            azur: '#007FFF',
            serenity: '#92A8D1'
        };

        var Coloriss = function (color, options) {
            this._hex = '';
	    this._rgb = {};
            // Options not used yet.
            if (typeof color !== 'undefined') {
                this.parse(color);
            }
        };

        var intToHex = function (n) {
            var s = "0123456789ABCDEF";

            n = parseInt(n, 10);
            if (!isNaN(n)) {
                n = Math.max(0, Math.min(n, 255));
                return s.charAt((n - n % 16) / 16) + s.charAt(n % 16);
            }
        };

        var sanitizeHex = function (hex) {

		if (hex.indexOf('#') > -1)
			hex = hex.substr(1, hex.length);
		if (hex.length === 3)
			hex += hex;

		return hex.toUpperCase();
        };

        var hexToRGB = function (hex) {
            var a, r, g, b;

            hex = parseInt("0x" + sanitizeHex(hex));

            a = 1;
            r = 0xFF & (hex >> 16);
            g = 0xFF & (hex >> 8);
            b = 0xFF & hex;

            return {r:r, g:g, b:b, a:a};
        };

        var RGBtoHex = function (rgb) {

            if (typeof rgb === 'object') {
                return intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
            }
        };

        var toString = function (obj) {
            var s, n, v = [];

            s = 'rgb';
            s += (typeof obj.a !== 'undefined') ? 'a(' : '(';
            Object.keys(obj).map(function (key, i) {
                v.push(obj[key]);
            });
            s += v.join(', ') + ')';
            return s;
        };

        /**
         * Main function, determine which type of color the value passed 
         * in parameter is. And then format as rgb/hex
         */ 
        Coloriss.prototype.parse = function (color) {

            var match;

            // Match an Hexadecimal color
            if ((match = color.match(/^#?(?:[0-9a-f]{3}){1,2}$/i))) {
                this._hex = '#' + sanitizeHex(match[0]);
                this._rgb = hexToRGB(this._hex);
            }
            // Match an rgb(a) color
            else if ((match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))) {
                match.shift();
                this._rgb = {
                    r: parseInt(match[0]),
                    g: parseInt(match[1]),
                    b: parseInt(match[2]),
                    a: parseFloat(match[3])
                };
                this._hex = '#' + RGBtoHex(this._rgb);
            }
        };

        /**
         * Same as the constructor but without options.
         */
        Coloriss.prototype.color = function (c) {
        	this.parse(c);
        	return this;
        };

        Coloriss.prototype.hex = function () {
            return this._hex;
        };

        Coloriss.prototype.rgb = function (str) {
	    if (typeof this._rgb !== 'undefined' && this._rgb.a) {
            if (typeof str !== 'undefined' && str) {
                return toString(this._rgb);
            }
            return this._rgb;
	    }
        };

        Coloriss.prototype.rgba = function (str) {
        	if (!this._rgb.a || typeof this._rgb.a === 'undefined')
        		this._rgb.a = 1;
            if (typeof str !== 'undefined' && str) {
                return toString(this._rgb);
            }
            return this._rgb;
        };

        Coloriss.prototype.rgbAsStr = function () {
            delete this._rgb.a;
            return toString(this._rgb);
        };

        Coloriss.prototype.rgbaAsStr = function () {
            return toString(this._rgb);
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

        Coloriss.prototype.grayScale = function () {
            var c = this._rgb;
            return (c.r + c.g + c.b) / 3;
        };

        Coloriss.prototype.colors = function () {
            return this._colors;
        };

        /**
         * Pickup a random color from the _colors object
         */
        Coloriss.prototype.randomColor = function () {

            var res, i, c = 0;

            for (i in _colors) {
                if (Math.random() < 1 / ++c)
                    res = i;
            }
            return res;
        };

        return Coloriss;

    })();

    // Export for node.js
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = Coloriss;
        }
        exports.Coloriss = Coloriss;
    }
    // Export for AMD
    else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return Coloriss;
        });
    } else {
        window.Coloriss = Coloriss; 
    }

}).call(this);
