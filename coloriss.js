
(function (root) { 'use strict';

    var Coloriss = (function () {

        var _hex, _rgb, _colors;

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

            // New colors 1.1
            pink: '#F7CAC9',
            gold: '#FFD700',
            silver: '#C0C0C0',
            copper: '#B87333',
            brass: '#B5A642',
            azur: '#007FFF',
            serenity: '#92A8D1'
        };

        var Coloriss = function (color, options) {
            // Options not used yet.
            if (typeof color !== 'undefined') {
                parse(color);
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

            a = hex >> 24 || 1;
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
                _hex = '#' + sanitizeHex(match[0]);
                _rgb = hexToRGB(_hex);
            }
            // Match an rgb(a) color
            else if ((match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))) {
                match.shift();
                _rgb = {a:match[3], r:match[0], g:match[1], b:match[2]};
                _hex = '#' + RGBtoHex(_rgb);
            }
        };

        Coloriss.prototype.hex = function () {
            return _hex;
        };

        Coloriss.prototype.rgb = function () {
        	delete _rgb.a;
            return _rgb;
        };

        Coloriss.prototype.rgba = function () {
            return _rgb;
        };

        Coloriss.prototype.alpha = function () {
            return _rgb.a;
        };

        Coloriss.prototype.red = function () {
            return _rgb.r;
        };

        Coloriss.prototype.green = function () {
            return _rgb.g;
        };

        Coloriss.prototype.blue = function () {
            return _rgb.b;
        };

        Coloriss.prototype.greyScale = function () {
            var c = _rgb;
            return (c.r + c.g + c.b) / 3;
        };

        return Coloriss;

    })();

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = Coloriss;
        }
        exports.Coloriss = Coloriss;
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return Coloriss;
        });
    } else {
        window.Coloriss = Coloriss; 
    }

}).call(this);
