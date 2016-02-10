var assert = require('assert');
var Coloriss = require('../coloriss');

module.exports = function () {
	
	// hex() func called

	it("should convert Hex color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('fff');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 2", function () {
		var cs = new Coloriss('#000');
		assert.strictEqual(cs.hex(), '#000000');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 3", function () {
		var cs = new Coloriss('#FFFFFF');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 4", function () {
		var cs = new Coloriss('#FfF23F');
		assert.strictEqual(cs.hex(), '#FFF23F');
	});

	it("should convert RGB color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('rgb(255, 255, 255)');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert RGBA color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('rgba(255, 255, 255, 1)');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

};