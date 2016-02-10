var assert = require('assert');
var Coloriss = require('../coloriss');

module.exports = function () {

	it("should convert hexadecimal color into correct red", function () {
		var cs = new Coloriss('#4200ff');
		assert.strictEqual(cs.red(), 66);
	});

	it("should convert hexadecimal color into correct green", function () {
		var cs = new Coloriss('#4200ff');
		assert.strictEqual(cs.green(), 0);
	});

	it("should convert hexadecimal color into correct blue", function () {
		var cs = new Coloriss('#4200ff');
		assert.strictEqual(cs.blue(), 255);
	});

	it("should convert RGBA color into correct alpha", function () {
		var cs = new Coloriss('rgba(255, 255, 255, 0.42)');
		assert.strictEqual(cs.alpha(), 0.42);
	});

	it("should convert hexadecimal color into correct red", function () {
		var cs = new Coloriss('#fff');
		assert.strictEqual(cs.grayScale(), 255);
	});

};