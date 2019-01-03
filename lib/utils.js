/*
* @Author: Thomas Bazire
* @Date:   2019-01-02 13:25:43
* @Last Modified by:   Thomas Bazire
* @Last Modified time: 2019-01-02 13:37:54
*/

function rgbToString (rgb) {
	var s = 'rgb', n, v = [];
	s += (typeof rgb.a !== 'undefined') ? 'a(' : '(';
	Object.keys(rgb).map((key, i) => v.push(rgb[key]));
	return s + v.join(', ') + ')';
}

module.exports = {
	rgbToString
};