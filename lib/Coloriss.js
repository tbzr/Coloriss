/*
* @Author: Thomas Bazire
* @Date:   2019-01-02 13:12:54
* @Last Modified by:   Thomas Bazire
* @Last Modified time: 2019-01-03 09:41:09
*/

const { rgbToString } = require('./utils');

class Coloriss {

	constructor (color, options) {
		this.options = options || {};
		this._hex = '';
		this._color = color;
		this._rgb = { r: 0, g: 0, b: 0, a: 0 };
		if (typeof color !== 'undefined') {
			this.parse(color);
		}
	}

	/**
	 * PUBLIC METHODS
	 * --------------
	 */


	/**
	 * [parse description]
	 * @param  {[type]} color [description]
	 * @return {[type]}       [description]
	 */
	parse (color) {
		color = color.trim();
		if (color.indexOf('#') === 0) this._parseHex(color);
		else if (color.indexOf('r') === 0) this._parseRGB(color);
		else throw new Error('Parsing error. Please pass hex or rgb/rgba color.');
	}


	hex () {
		if (!this._hex || this._hex === '') {
			if (this._color && typeof this._color !== 'undefined') {
				this.parse(color);
			} else {
				throw new Error('Must set a color before calling this method.');
			}
		}
		return this._hex;
	}

	rgb (asString = false) {
		const copy = Object.assign({}, this._rgb);
		delete copy.a;
		if (asString === true) return rgbToString(copy);
		return copy;
	}

	rgba (asString = false) {
		var copy = Object.assign({a: 1}, this._rgb);
		if (asString === true) return rgbToString(copy);
		return copy;
	}

	/**
	 * Private Methods
	 */
	
	/**
	 * Sub Method of parse. Will parse Hexadecimal user input.
	 * @param  {String} color Hex color as string
	 * @return {Void}
	 */
	_parseHex (color) {
		var match = color.match(/^#?(?:[0-9a-f]{3}){1,2}$/i);
		if (match) {
			this._hex = `#${this._sanitizeHex(match[0])}`;
			this._rgb = this._hexToRGB(this._hex);
		} else {
			throw new Error('Parsing error. Failed to parse hex value.')
		}
	}


	/**
	 * Sub Method of parse. Will parse RGB/a user input.
	 * @param  {String} color Color as RGB/a
	 * @return {Void}
	 */
	_parseRGB (color) {
		const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
		if (match) {
			match.shift();
			this._rgb = {
				r: parseInt(match[0]),
				g: parseInt(match[1]),
				b: parseInt(match[2]),
				a: parseFloat(match[3])
			};
			this._hex = `#${this._RGBtoHex(this._rgb)}`;
		} else {
			throw new Error('Parsing error. Failed to parse rgb string.');
		}
	}

	/**
	 * Sanitize Hexadecimal color string.
	 * -------------------------------------------------
	 * @param  {String} hex Hexadecimal form of color
	 * @return {String}     Sanitized hexadecimal color
	 */
	_sanitizeHex (hex) {
		if (hex.indexOf('#') > -1)
			hex = hex.substr(1, hex.length);
		if (hex.length === 3)
			hex += hex;
		return hex.toUpperCase();
	}

	/**
	 * Convert in value to Hexadecimal
	 * --------------------------------
	 * @param  {Number} n Int value to convert
	 * @return {String}   Hexadecimal convertion of n
	 */
	_intToHex (n) {
		const s = "0123456789ABCDEF";
		n = parseInt(n, 10);
		if (!isNaN(n)) {
			n = Math.max(0, Math.min(n, 255));
			return s.charAt((n - n % 16) / 16) + s.charAt(n % 16);
		}
	}

	/**
	 * Convert RGB object to Hexadecimal String
	 * -----------------------------------------
	 * @param  {Object} rgb RGB Color as Object
	 * @return {String}     Hex string
	 */
	_RGBtoHex (rgb) {
		return this._intToHex(rgb.r) + this._intToHex(rgb.g) + this._intToHex(rgb.b);
	}

	/**
	 * Convert Hexadecimal value to RGBA object
	 * ----------------------------------------
	 * @param  {String} hex Hexadecimal value
	 * @return {Object}    RGBa object
	 */
	_hexToRGB (hex) {
		var a, r, g, b;
		hex = parseInt("0x" + this._sanitizeHex(hex));
		a = 1;
		r = 0xFF & (hex >> 16);
		g = 0xFF & (hex >> 8);
		b = 0xFF & hex;
		return {r:r, g:g, b:b, a:a};
	}
}

module.exports = Coloriss;